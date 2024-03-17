export default defineNuxtPlugin(() => {
  return {
    provide: {
      caxios: async (url: string): Promise<unknown> => {
        const data = await useFetch("/api" + url);
        return data.data.value;
      },
      auth: () => {
        const { data } = useSession();
        return data.value?.user;
      },
      school_id: (school_id: string | number) => {
        const { data } = useSession();
        let user = data.value?.user;
        return user?.school_id ? user.school_id : school_id;
      },
    },
  };
});
