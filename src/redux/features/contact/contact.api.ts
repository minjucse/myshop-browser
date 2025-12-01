import { baseApi } from "@/redux/baseApi";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendContact: builder.mutation({
      query: (body) => ({
        url: "/contactMessage/send",
        method: "POST",
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useSendContactMutation } = contactApi;
