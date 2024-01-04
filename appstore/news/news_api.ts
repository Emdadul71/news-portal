import { apiSlice } from "../api-slice";

export const postsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllPosts: build.query({
      query: ({
        keyword,
        status,
        start_date,
        end_date,
        category,
        source,
        page,
        limit,
      }) => {
        let url;

        if (start_date != null && end_date != null) {
          url = `/news?keyword=${keyword}&status=${status}&category=${category}&start_date=${start_date}&end_date=${end_date}&source=${source}&page=${page}&limit=${limit}`;
        } else {
          url = `/news?keyword=${keyword}&status=${status}&category=${category}&source=${source}&page=${page}&limit=${limit}`;
        }
        return {
          url: `${url}`,
        };
      },
      providesTags: ["News"],
    }),

    getSinglePost: build.query({
      query: ({ id }) => `news/${id}`,
    }),
    useGetNewsSource: build.query({
      query: () => `/public/news/sources`,
    }),
    addPost: build.mutation({
      query: (data) => ({
        url: "/news",
        method: "POST",
        body: data,
      }),
    }),
    updatePost: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `/news/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
    deletePost: build.mutation({
      query: ({ type, id }) => {
        let url;
        if (type == "soft") {
          url = `/news/${id}`;
        } else {
          url = `/trash/news/${id}`;
        }
        return {
          url,
          method: "DELETE",
        };
      },
      invalidatesTags: ["News"],
    }),
    getNewsSource: build.query({
      query: () => `/public/news/sources`,
    }),
    postBulkDelete: build.mutation({
      query: (data) => ({
        url: "/news/bulk-destroy",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["News"],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetSinglePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetNewsSourceQuery,
  usePostBulkDeleteMutation,
  useUseGetNewsSourceQuery,
} = postsApi;
