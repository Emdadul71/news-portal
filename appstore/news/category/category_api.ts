import { apiSlice } from "@/appstore/api-slice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query({
      query: ({ queryString, isTrash }) =>
        isTrash
          ? `/trash/categories${queryString}`
          : `/categories${queryString}/PUBLIC`,
      providesTags: ["Category"],
    }),
    createCategory: build.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    singleCategory: build.query({
      query: ({ id }) => `/categories/${id}`,
      transformResponse: (response: any) => {
        const metaKeyArray = response?.meta_keyword
          ? response?.meta_keyword.split(",")
          : [];

        const keywordArr = response?.keywords
          ? response?.keywords.split(",")
          : [];

        const data = {
          id: response.id,
          title: response.title,
          title_en:
            response.title_en == "null" || null ? "" : response.title_en,
          slug: response.slug,
          keywords: keywordArr,
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
          feature_alt: response.feature_alt,
        };

        return data;
      },
    }),
    updatecategory: build.mutation({
      query: ({ data, id }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: build.mutation({
      query: ({ id, isTrash }) => ({
        url: isTrash ? `/trash/categories/${id}` : `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    restoreCategory: build.mutation({
      query: ({ id }) => {
        return {
          url: `/trash/categories/${id}`,
          method: "PUT",
        };
      },
      invalidatesTags: ["Category"],
    }),
    getCategoryDropdowns: build.query({
      query: ({ keyword = "" }) =>
        `/public/categories/dropdowns?keyword=${keyword}`,
    }),
    categoryBulkDelete: build.mutation({
      query: ({ ids }) => ({
        url: "/categories/bulk-destroy",
        method: "POST",
        body: { ids: ids },
      }),
      invalidatesTags: ["Category"],
    }),
    moveNews: build.mutation({
      query: (data) => ({
        url: "/news/change-category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category", "News"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useSingleCategoryQuery,
  useUpdatecategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryDropdownsQuery,
  useCategoryBulkDeleteMutation,
  useMoveNewsMutation,
  useRestoreCategoryMutation,
} = categoryApi;
