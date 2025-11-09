const numberFormatFollowers = (followers: number) => {
  if (followers === null || followers == undefined || isNaN(followers))
    return "0";

  if (followers >= 1_000_000_000) {
    return (followers / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (followers >= 1_000_000) {
    return (followers / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (followers >= 1_000) {
    return (followers / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return followers.toString();
  }
};

export { numberFormatFollowers };
