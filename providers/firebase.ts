// import { joinURL } from 'ufo';
// import type { ProviderGetImage } from '@nuxt/image';

// export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL } = {}) => {
//     // Set the default baseURL if not provided
//     baseURL = baseURL || 'https://firebasestorage.googleapis.com/v0/b/rise-1577795242910.appspot.com/o';

//     // Remove leading slash from src if present
//     if (src.startsWith('/')) {
//         src = src.substring(1);
//     }

//     // Encode the src to handle special characters
//     src = encodeURIComponent(src);

//     // Construct the full URL
//     let url = joinURL(baseURL, src);

//     // Append Firebase's required query parameters
//     url += '?alt=media';

//     return { url };
// };

import { joinURL } from 'ufo';
import type { ProviderGetImage } from '@nuxt/image';

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL } = {}) => {
    // Set the default baseURL to a relative path
    baseURL = baseURL || '/';

    // Construct the full URL
    let url = joinURL(baseURL, src);

    return { url };
};
