export const handleUnderLine = (title, templateTitle) => {
  if (title.length === templateTitle.length) {
    return title;
  }
  return title.concat('|');
};
