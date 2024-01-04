import { apiSlice } from "@/appstore/api-slice";

const baseURL = "blog";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: `/${baseURL}`,
        method: "POST",
        body: data,
        keepUnusedDataFor: 0,
      }),
    }),
    getAllBlog: build.query({
      query: (queryString) => `/${baseURL}/all/${queryString}`,
      providesTags: ["blog"],
    }),
    getAllPublicBlog: build.query({
      query: (queryString) => `/public/blogs/${queryString}`,
    }),
    updateBlog: build.mutation({
      query: ({ data, id }: any) => {
        return {
          url: `/${baseURL}/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["blog"],
    }),
    deleteBLog: build.mutation({
      query: (id) => ({
        url: `/${baseURL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    categoryDropdown: build.query({
      query: () => {
        return `/public/categories/dropdowns`;
      },
      keepUnusedDataFor: 10,
    }),
    singleBlog: build.query({
      query: ({ id }) => {
        return `/${baseURL}/${id}`;
      },
      transformResponse: (response: any) => {
        const data = {
          id: response.id,
          title: response?.title,
          slug: response?.slug,
          subTitle: response?.subTitle,
          shortDescription: response?.shortDescription,
          description: response?.description,
          featuredImage: response?.featuredImage,
          posterImage: response?.posterImage,
          publishedAt: response?.publishedAt,
          metaTitle: response?.metaTitle,
          metaKeyword: response?.metaKeyword,
          metaDescription: response?.metaDescription,
          status: response?.status,
          // categoryIds: response?.categories.map((item: any) =>
          //   item.id.toString()
          // ),
          categoryIds: response?.categories.map((item: any) => {
            return { value: item.id.toString(), label: item?.title };
          }),
        };
        return data;
      },
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useCategoryDropdownQuery,
  useSingleBlogQuery,
  useGetAllBlogQuery,
  useUpdateBlogMutation,
  useDeleteBLogMutation,
  useGetAllPublicBlogQuery,
} = blogApi;
