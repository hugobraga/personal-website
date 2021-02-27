import React, { Fragment } from "react";
import { buildUrl } from "react-instafeed";

// 🔥️ These are in your code (not this repo)
// import useAbortableFetch from "@hooks/useAbortableFetch";
import useAbortableFetch from 'use-abortable-fetch';
// import Image from "@components/Image";

const options = {
  accessToken:
    "IGQVJXUmRaVWk2TDk4RVNsWVFuMUtLUE1HN0pHbGlnRXdKUUpqNTlPZA24tTWFHVGYxVDk3VzhwX000NzlPWElhdjY3aHdPS0tRSUwxa1hBdWRDNFFpYVJrYW5FWmxuSVhRME9zVGhrOUpsM1JsN1VNcwZDZD",
  clientId: "5164997023573177",
  get: "user", // popular, user
  locationId: null,
  resolution: "standard_resolution", // thumbnail, low_resolution, standard_resolution
  sortBy: "none", // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 123,
};

const Instagram = () => {
  const { json, loading, error, abort } = useAbortableFetch(buildUrl(options));
  if (loading) return "Loading...";
  if (error) return `Error: ${error}`;
  if (!json) return null;

  const { data, meta, pagination } = json;

  return (
    <Fragment>
      {
        // eslint-disable-next-line no-unused-vars
        data &&
          data.map(({ caption, id, images, tags }, index) => {
            const image = images[options.resolution];
            return (
              <div>
                {/* <Image
                  key={index}
                  url={image.url}
                  title={caption.text}
                  caption={caption.text}
                  width={image.width}
                  height={image.height}
                /> */}
              </div>
            );
          })
      }
    </Fragment>
  );
};
