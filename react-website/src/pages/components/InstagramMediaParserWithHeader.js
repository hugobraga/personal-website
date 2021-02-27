const getAbstractData = data => {
    try {
      const id = data.id
      const types =  {
        GraphVideo: 'video',
        GraphImage: 'image',
        GraphSidecar: 'multiple',
      }
      const type = types[data.__typename]
      let caption = ''
      let media = []
      let description = ''
      let like_count = 0
      let comment_count = 0
  
  
      if (type === 'video') {
        media = [{
          video_url: data.video_url,
          video_view_count: data.video_view_count,
          display_url: data.display_url,
          dimensions: data.dimensions,
          type
        }]
      } else if (type === 'image') {
        media = [{
          display_url: data.display_url,
          dimensions: data.dimensions,
          type
        }]
      } else {
        media = data
          .edge_sidecar_to_children
          .edges
          .map(({ node }) => {
            const [ item ] = getAbstractData(node).media
  
            return item
          })
      }
  
      if (data.edge_media_to_caption) {
        description = (
          data
            .edge_media_to_caption
            .edges[0]
            .node
            .text
        )
      }
  
      if (data.edge_media_preview_like) {
        like_count = data.edge_media_preview_like.count
      }
  
      if (data.edge_media_preview_comment) {
        comment_count = data.edge_media_preview_comment.count
      }
  
      if (data.accessibility_caption) {
        caption = data.accessibility_caption
      }
  
      return {
        id,
        description,
        like_count,
        comment_count,
        type,
        caption,
        media
      }
    } catch (err) {
      throw ({ message: `Malformed response from Instagram` })
    }
  }
  
  const InstagramMediaParserWithHeader = async ({ uri, verbose }) => {
    console.log(uri);
    // const cors_proxy = "https://react-cors-proxy2.herokuapp.com/";
    // const cors_proxy = "https://react-cors-proxy4.herokuapp.com/"+uri;
    // const cors_proxy = "http://gobetween.oklabs.org/" + uri;
    // const cors_proxy = "0.0.0.0:8080/" + uri;
    const cors_proxy = "http://localhost:8010/proxy"+uri;
    // var object: {
    //   // link: "https://api.producthunt.com/v1/posts",
      const obj = {
        method: "GET",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: "Bearer " + this.state.clientToken,
          // Host: "api.producthunt.com",
          // "Target-Endpoint": uri,
          // "X-Requested-With": "XMLHttpRequest",
          'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': '*',
          // 'Access-Control-Allow-Headers': '*'
          "Target-URL": uri,
        },
        // mode: 'no-cors'
      };
    // };

    try {
      const response = await (
        fetch(cors_proxy)
          .then(payload => payload.text())
          .then(payload => {
            const [markup, _sharedData] = payload.split("window._sharedData = ")
            const [data] = _sharedData.split(";</script>")
  
            return JSON.parse(data)
          })
          .then((data = {}) => data.entry_data.PostPage[0])
          .then((data = {}) => data.graphql)
          .then((data = {}) => data.shortcode_media)
      )
  
      return verbose ? response : getAbstractData(response)
    } catch (err) {
      console.log(err);
      throw ({ message: `Couldn't fetch this post`, uri })
    }
  }
  
  export default InstagramMediaParserWithHeader
