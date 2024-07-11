"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { addProject } from "@/app/Riishi/Projects/Requests";
import { toast } from "@/shadcn/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { default as NextImage } from "next/image";
import { addDesign } from "@/app/Riishi/Blogs/Requests";

const AddDesigns = () => {
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined
  );
  const [designImage, setDesignImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const coverImage = localStorage.getItem("header");
    if (coverImage) {
      setImagePreview("data:image/png;base64," + coverImage);
    }
    const designImage = localStorage.getItem("images");
    if (designImage) {
      setDesignImage("data:image/png;base64," + designImage);
    }
    // }
  }, []);

  function compressAndSave(
    imgFile: File,
    itemName: string,
    imgState: (imageDate: string) => void
  ) {
    if (imgFile.size > 300000) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageData = reader.result as string;
        // Create an HTMLImageElement
        const imgElement = new Image();
        imgElement.src = imageData;

        // Pass the HTMLImageElement to compress
        compressImage(imgElement, 1, 0.5, itemName, imgState);
      };
      reader.readAsDataURL(imgFile);
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        imgState(imageData);
        localStorage.setItem(itemName, imageData); // Store image data in local storage
      };
      reader.readAsDataURL(imgFile);
    }
  }

  function compressImage(
    imgToCompress: HTMLImageElement,
    resizingFactor: number,
    quality: number,
    itemName: string,
    imgState: (imageDate: string) => void
  ) {
    imgToCompress.onload = () => {
      // resizing the image
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      const originalWidth = imgToCompress.width;
      const originalHeight = imgToCompress.height;

      canvas.width = originalWidth * resizingFactor;
      canvas.height = originalHeight * resizingFactor;

      context!.drawImage(
        imgToCompress,
        0,
        0,
        originalWidth * resizingFactor,
        originalHeight * resizingFactor
      );
      // reducing the quality of the image
      canvas.toBlob(
        (blob) => {
          if (blob) {
            // Convert Blob to base64-encoded string
            const reader = new FileReader();

            reader.onloadend = () => {
              const imageData = reader.result as string;
              imgState(imageData);

              // Store the base64-encoded string in localStorage
              localStorage.setItem(itemName, imageData);
            };
            reader.readAsDataURL(blob);
          } else {
          }
        },
        "image/jpeg",
        quality
      );
    };
  }

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    itemName: string,
    imgState: (imageDate: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      compressAndSave(file, itemName, imgState);
    }
  };

  const handleRemoveImage: (
    fileInputName: string,
    itemName: string,
    imgState: (imageData: any) => void
  ) => MouseEventHandler<HTMLButtonElement> | undefined = (
    fileInputName,
    itemName,
    imgState
  ) => {
    return (event) => {
      imgState(undefined);
      localStorage.removeItem(itemName);
      const fileInput = document.getElementById(
        fileInputName
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    };
  };

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      const data = await addDesign(values);
      return data;
    },
    onSuccess(data) {
      formik.resetForm();
      handleRemoveImage("headerimage", "header", setImagePreview);
      handleRemoveImage("designs", "images", setDesignImage);
      toast({
        description: data.message,
      });
      router.push("/Riishi");
    },
    onError() {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });
  
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      category: "",
      projectType: "",
      role: "",
      industry: "",
      problemStatement: "",
      description: "",
      designLink: "",
      headerimage: "",
      contentHeader:"",
      contentHeader2:"",
      content:"",
      images:"",
      presentationLink:"",
      conclusion: "",
    },
    // validationSchema: {},
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  useEffect(() => {
    formik.setFieldValue("headerimage", imagePreview);
  }, [imagePreview]);

  useEffect(() => {
    formik.setFieldValue("images", designImage);
  }, [designImage]);
  
  return (
    <div className="mt-20">
      <div className="min-h-screen flex items-center justify-center">
        <form
          className="w-full max-w-2xl p-6 space-y-12 rounded-lg"
          onSubmit={formik.handleSubmit}
        >
          <div className="space-y-12">
            <div className="border-gray-900/10 dark:border-gray-100 ">
              <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
                Design Project
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Project Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="title"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-4 dark:text-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Project title"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.title}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Project Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-4 dark:text-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Project name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Design Figma Link
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="designLink"
                        id="designLink"
                        autoComplete="designLink"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-4 dark:text-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Project URL"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.designLink}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-full mt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Problem Statement
                </label>
                <div className="mt-2">
                  <input
                    id="problemStatement"
                    name="problemStatement"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.problemStatement}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                  What is the problem we are trying to solve by design? (not more than 7 words) Make it catchy!
                </p>
              </div>

              <div className="col-span-full mt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                  Describe the nature of the problem statement.
                </p>
              </div>

              <div className="col-span-full mt-5">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed dark:border-gray-100 border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <NextImage
                      src={imagePreview || "/photo-icon.svg"}
                      width={100}
                      height={100}
                      alt="photo icon"
                      className="ml-10"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-200">
                      <label
                        htmlFor="header-file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload Image File</span>
                        <input
                          id="header-file-upload"
                          name="headerimage"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={(event) => {
                            handleImageChange(event, "header", setImagePreview);
                          }}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600 dark:text-gray-200">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
                {imagePreview && (
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleRemoveImage(
                        "headerimage",
                        "header",
                        setImagePreview
                      )}
                      className="relative text-small cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500"
                    >
                      Remove Photo
                    </button>
                  </div>
                )}
              </div>

              <div className="border-gray-900/10 pb-8 mt-10">
                <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
                  Project Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-200">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Project Category
                  </label>
                  <div className="mt-2">
                    <input
                      id="category"
                      name="category"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.category}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                    The project category can either be an original or a redesign.
                  </p>
                </div>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Project Type
                  </label>
                  <div className="mt-2">
                    <input
                      id="projectType"
                      name="projectType"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.projectType}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                    Is it a single page, end-to-end, etc. type of project?
                  </p>
                </div>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    My Role
                  </label>
                  <div className="mt-2">
                    <input
                      id="role"
                      name="role"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.role}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                    What is your role in the project?
                  </p>
                </div>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Project indutry
                  </label>
                  <div className="mt-2">
                    <input
                      id="industry"
                      name="industry"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.industry}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                    Which domain does your project fall under?
                  </p>
                </div>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Content Header I
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="contentHeader"
                      name="contentHeader"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.contentHeader}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                    Write a title for your design, make it outstanding.
                  </p>
                </div>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Content Header II
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="contentHeader2"
                      name="contentHeader2"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.contentHeader2}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                    Write another title for your design, describe what is in the content.
                  </p>
                </div>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Introduction
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="content"
                      name="content"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.content}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                    Write a brief background story of the topic of your project. Keep people guessing and click on the presentation link
                  </p>
                </div>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Presentation Cover Image Preview
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed dark:border-gray-100 border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <NextImage
                        src={designImage || "/photo-icon.svg"}
                        width={100}
                        height={100}
                        alt="photo icon"
                        className="ml-10"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-200">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="designs"
                            type="file"
                            className="sr-only"
                            onChange={(event) => {
                              handleImageChange(
                                event,
                                "images",
                                setDesignImage
                              );
                            }}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600 dark:text-gray-200">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                  {designImage && (
                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={handleRemoveImage(
                          "designs",
                          "images",
                          setDesignImage
                        )}
                        className="relative text-small cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500"
                      >
                        Remove Photo
                      </button>
                    </div>
                  )}
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                    Add images of the designs.
                  </p>
                </div>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Presentation Link
                  </label>
                  <div className="mt-2">
                    <input
                      id="presentationLink"
                      name="presentationLink"
                      className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.presentationLink}
                    />
                  </div>
                </div>

                <div className="col-span-full mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                  >
                    Conclusion
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="conclusion"
                      name="conclusion"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 pl-4 dark:text-gray-200 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.conclusion}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-200">
                    Write a summary of the project and the main take away
                    points.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className="rounded-md w-full bg-black dark:bg-white dark:text-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDesigns;
