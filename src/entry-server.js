import { createApp } from "./main";

export default context => {
  return new Promise(async (resolve, reject) => {
    const { app, router } = await createApp();

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      Promise.all(
        matchedComponents.map(Component => {
          if (Component.asyncData) {
            return Component.asyncData({
              route: router.currentRoute
            });
          }
        })
      )
        .then(() => {
          // getState
        })
        .then(() => {
          resolve(app);
        });
    }, reject);
  });
};
