export const userDelete = (user, data, setData) => {
    setData(
      [...data].filter((elem) => {
        return user !== elem.username;
      })
    );
  };