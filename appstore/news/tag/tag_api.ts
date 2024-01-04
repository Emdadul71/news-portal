import { apiSlice } from "@/appstore/api_slice";

export const tagApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllTag: build.query({
      query: ({ keyword, page, limit }) =>
        `/tags?keyword=${keyword}&page=${page}&limit=${limit}`,
      providesTags: ["Tag"],
    }),

    createTag: build.mutation({
      query: (data) => ({
        url: "/tags",
        method: "POST",
        body: data,
      }),
    }),

    getSingleTag: build.query({
      query: ({ id }) => `/tags/${id}`,
      transformResponse: (response: any) => {
        const metaKeyArray = response?.meta_keyword
          ? response?.meta_keyword.split(",")
          : [];

        const data = {
          id: response.id,
          title: response.title,
          title_en:
            response.title_en == "null" || null ? "" : response.title_en,
          slug: response.slug,
          meta_title:
            response.meta_title == "null" || null ? "" : response.meta_title,
          meta_description:
            response.meta_description == "null" || null
              ? ""
              : response.meta_description,
          meta_keyword: metaKeyArray,
          status: response.status,
          sub_title:
            response.sub_title == "null" || null ? "" : response.sub_title,
          heading: response.heading == "null" || null ? "" : response.heading,
          summary: response.summary == "null" || null ? "" : response.summary,
          feature_img: response.feature_img,
          feature_alt:
            response.feature_alt == "null" || null ? "" : response.feature_alt,
        };

        return data;
      },
    }),

    updateTag: build.mutation({
      query: ({ data, id }) => ({
        url: `/tags/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Tag"],
    }),

    deleteTag: build.mutation({
      query: ({ id }) => {
        return {
          url: `/tags/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Tag"],
    }),
    tagBulkDelete: build.mutation({
      query: (data) => ({
        url: "/tags/bulk-destroy",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tag"],
    }),
  }),
});

export const {
  useGetAllTagQuery,
  useCreateTagMutation,
  useGetSingleTagQuery,
  useUpdateTagMutation,
  useDeleteTagMutation,
  useTagBulkDeleteMutation,
} = tagApi;
