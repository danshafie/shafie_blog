module.exports = {
  createSlug: function(str) {
    return str.replace(/[^0-9a-zA-Z ]/g, "").replace(/ /g, "-")
  },
}
