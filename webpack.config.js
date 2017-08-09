{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader/style" },
          { loader: "file-loader" }
        ]
      }
    ]
  }
}