/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //livestreamingSidebar: [{ type: "autogenerated", dirName: "live-streaming" }],
  /*realtimeCommunicationSidebar: [
    { type: "autogenerated", dirName: "realtime-communication" },
  ],*/
  overview: [
    {
      type: "category",
      label: "DASHBOARD",
      items: [
        "overview/dashboard/getting-started",
        //"overview/dashboard/features"
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "VIDEO & AUDIO CALLING",
      items: [
        "overview/video-and-audio-calling-api-sdk/getting-started",
        "overview/video-and-audio-calling-api-sdk/architecture",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "INTERACTIVE LIVE STREAMING",
      items: [
        "overview/interactive-live-streaming/getting-started",
        "overview/interactive-live-streaming/architecture",
      ],
      collapsed: false,
    },
    // {
    //   type: "category",
    //   label: "REAL TIME COMMUNICATION",
    //   items: [
    //     "overview/real-time-communication/introduction",
    //     // "overview/real-time-communication/features",
    //   ],
    //   collapsed: false,
    // },
    {
      type: "category",
      label: "STANDARD LIVE STREAMING",
      items: [
        //"overview/live-streaming/introduction",
        // "overview/live-streaming/features",
        "overview/live-streaming/getting-started",
        "overview/live-streaming/architecture",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "VIDEO ON DEMAND",
      items: [
        // "overview/video-on-demand/introduction",
        // "overview/video-on-demand/features",
        "overview/video-on-demand/getting-started",
        "overview/video-on-demand/architecture",
      ],
      collapsed: false,
    },
  ],

  // Guide to learn about each SDK
  guideDashboard: [
    {
      type: "category",
      label: "GUIDE",
      items: ["guide/dashboard/getting-started"],
      collapsed: false,
    },
    // {
    //   type: "category",
    //   label: "Pages",
    //   items: [
    //     "guide/dashboard/dashboard-home",
    //     "guide/dashboard/dashboard-home",

    //     "guide/dashboard/meetings",
    //     "guide/dashboard/video-on-demand",
    //     "guide/dashboard/live-streaming",
    //     "guide/dashboard/profile-and-billing",
    //     "guide/dashboard/start-tour-and-quick-start",
    //   ],
    //   collapsed: false,
    // },
    // {
    //   type: "category",
    //   label: "How to ?",
    //   items: [
    //     "guide/dashboard/create-api-key",
    //     "guide/dashboard/domain-whitelisting",
    //   ],
    //   collapsed: false,
    // },
  ],

  guidePrebuiltVideoCalling: [
    {
      type: "category",
      label: "GUIDE",
      items: ["guide/prebuilt-video-and-audio-calling/getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "guide/prebuilt-video-and-audio-calling/signup-and-create-api",
        {
          type: "category",
          label: "Client Setup",
          items: [
            "guide/prebuilt-video-and-audio-calling/using-npm",
            "guide/prebuilt-video-and-audio-calling/using-script",
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        "guide/prebuilt-video-and-audio-calling/features/join-screen",
        "guide/prebuilt-video-and-audio-calling/features/camera-controls",
        "guide/prebuilt-video-and-audio-calling/features/mic-controls",
        "guide/prebuilt-video-and-audio-calling/features/redirect-on-leave",
        "guide/prebuilt-video-and-audio-calling/features/screenshare",
        "guide/prebuilt-video-and-audio-calling/features/send-messages",
        "guide/prebuilt-video-and-audio-calling/features/record-meeting",
        "guide/prebuilt-video-and-audio-calling/features/go-live-social-media",
        "guide/prebuilt-video-and-audio-calling/features/customize-branding",
        "guide/prebuilt-video-and-audio-calling/features/customize-permissions",
        "guide/prebuilt-video-and-audio-calling/features/whitelist-domain",
        "guide/prebuilt-video-and-audio-calling/features/pin-participants",
      ],
      collapsed: false,
    },
  ],

  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "GUIDE",
      items: ["guide/video-and-audio-calling-api-sdk/getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "guide/video-and-audio-calling-api-sdk/signup-and-create-api",
        "guide/video-and-audio-calling-api-sdk/server-setup",
        {
          type: "category",
          label: "Client Setup",
          items: [
            "guide/video-and-audio-calling-api-sdk/supported-platforms",
            "guide/video-and-audio-calling-api-sdk/javascript-sdk",
            "guide/video-and-audio-calling-api-sdk/react-js-sdk",
            "guide/video-and-audio-calling-api-sdk/react-native-android-sdk",
            "guide/video-and-audio-calling-api-sdk/react-native-ios-sdk",
            "guide/video-and-audio-calling-api-sdk/android-sdk",
            "guide/video-and-audio-calling-api-sdk/ios-sdk",
            "guide/video-and-audio-calling-api-sdk/flutter-sdk",
          ],
          collapsed: true,
        },
        // "guide/video-and-audio-calling-api-sdk/start-or-join-meeting",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        // "guide/video-and-audio-calling-api-sdk/features/initilize-meeting-factory",
        "guide/video-and-audio-calling-api-sdk/features/start-join-meeting",
        "guide/video-and-audio-calling-api-sdk/features/manage-participants",
        "guide/video-and-audio-calling-api-sdk/features/leave-end-meeting",
        "guide/video-and-audio-calling-api-sdk/features/camera-controls",
        "guide/video-and-audio-calling-api-sdk/features/mic-controls",
        "guide/video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "guide/video-and-audio-calling-api-sdk/features/screenshare",
        "guide/video-and-audio-calling-api-sdk/features/send-messages",
        "guide/video-and-audio-calling-api-sdk/features/record-meeting",
        "guide/video-and-audio-calling-api-sdk/features/play-external-video",
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
        "guide/video-and-audio-calling-api-sdk/features/speaker-indication",
        "guide/video-and-audio-calling-api-sdk/features/pin-participants",
      ],
      collapsed: false,
    },
  ],

  guideStandardLiveStreaming: [
    {
      type: "category",
      label: "GUIDE",
      items: ["guide/standard-live-streaming-api-sdk/getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "guide/standard-live-streaming-api-sdk/signup-and-create-api",
        "guide/standard-live-streaming-api-sdk/authentication",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        "guide/standard-live-streaming-api-sdk/features/create-new-live-stream",
        "guide/standard-live-streaming-api-sdk/features/go-live-with-rtmp",
        "guide/standard-live-streaming-api-sdk/features/play-live-stream",
        "guide/standard-live-streaming-api-sdk/features/record-live-stream",
        "guide/standard-live-streaming-api-sdk/features/restream-social-media",
        "guide/standard-live-streaming-api-sdk/features/fetch-listof-live-stream",
        "guide/standard-live-streaming-api-sdk/features/get-live-stream-details",
        "guide/standard-live-streaming-api-sdk/features/update-live-stream",
      ],
      collapsed: false,
    },
  ],

  guideVideoOnDemand: [
    {
      type: "category",
      label: "GUIDE",
      items: ["guide/video-on-demand/getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "guide/video-on-demand/signup-and-create-api",
        "guide/video-on-demand/authentication",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        {
          type: "category",
          label: "File",
          items: [
            "guide/video-on-demand/features/upload-file",
            "guide/video-on-demand/features/list-all-files",
            "guide/video-on-demand/features/get-file-details",
            "guide/video-on-demand/features/delete-file",
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "Encoding",
          items: [
            "guide/video-on-demand/features/create-encoding-job",
            "guide/video-on-demand/features/list-encoding-jobs",
            "guide/video-on-demand/features/get-encoding-job-details",
            "guide/video-on-demand/features/delete-encoding-job",
          ],
          collapsed: false,
        },
        "guide/video-on-demand/features/play-video",
      ],

      collapsed: false,
    },
  ],

  realtimeCommunicationSidebar: [
    {
      type: "category",
      label: "REAL TIME COMMUNICATION",
      items: [
        "realtime-communication/intro",
        "realtime-communication/architecture",
      ],
      collapsed: false,
    },

    {
      type: "category",
      label: "API REFERENCE",
      items: [
        {
          type: "category",
          label: "REST API REFERENCE",
          collapsed: true,
          items: [
            "realtime-communication/rest-api-reference/auth",
            "realtime-communication/rest-api-reference/create-join-meeting",
            "realtime-communication/rest-api-reference/list-all-meetings",
            "realtime-communication/rest-api-reference/get-meeting-details",
            "realtime-communication/rest-api-reference/list-meeting-sessions",
            "realtime-communication/rest-api-reference/get-session-details",
            "realtime-communication/rest-api-reference/list-recordings",
            "realtime-communication/rest-api-reference/get-recording-details",
            "realtime-communication/rest-api-reference/remove-recording",
          ],
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "SDK REFERENCE",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "PREBUILT SDK JS",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/prebuilt-sdk-js/setup",
            "realtime-communication/sdk-reference/prebuilt-sdk-js/video-sdk-meeting",
          ],
        },
        {
          type: "category",
          label: "JAVASCRIPT SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/javascript-sdk/setup",
            "realtime-communication/sdk-reference/javascript-sdk/meeting-class",
            "realtime-communication/sdk-reference/javascript-sdk/participant-class",
            "realtime-communication/sdk-reference/javascript-sdk/stream-class",
          ],
        },
        {
          type: "category",
          label: "REACT SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/react-sdk/setup",
            "realtime-communication/sdk-reference/react-sdk/use-meeting",
            "realtime-communication/sdk-reference/react-sdk/use-participant",
            "realtime-communication/sdk-reference/react-sdk/meeting-provider",
            "realtime-communication/sdk-reference/react-sdk/meeting-consumer",
          ],
        },
        {
          type: "category",
          label: "REACT NATIVE SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/react-native-sdk/setup",
            "realtime-communication/sdk-reference/react-native-sdk/setup-android",
            "realtime-communication/sdk-reference/react-native-sdk/setup-ios",
            "realtime-communication/sdk-reference/react-native-sdk/rtc-stream",
            "realtime-communication/sdk-reference/react-sdk/use-meeting",
            "realtime-communication/sdk-reference/react-sdk/use-participant",
            "realtime-communication/sdk-reference/react-sdk/meeting-provider",
            "realtime-communication/sdk-reference/react-sdk/meeting-consumer",
          ],
        },
        {
          type: "category",
          label: "ELECTRON SDK",
          collapsed: true,
          items: ["realtime-communication/sdk-reference/electron-sdk/setup"],
        },
        {
          type: "category",
          label: "ANDROID SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/android-sdk/setup",
            "realtime-communication/sdk-reference/android-sdk/video-sdk-class",
            "realtime-communication/sdk-reference/android-sdk/meeting-class",
            "realtime-communication/sdk-reference/android-sdk/participant-class",
            "realtime-communication/sdk-reference/android-sdk/stream-class",
            "realtime-communication/sdk-reference/android-sdk/meeting-event-listener-class",
            "realtime-communication/sdk-reference/android-sdk/participant-event-listener-class",
          ],
        },
        {
          type: "category",
          label: "IOS SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/ios-sdk/setup",
            "realtime-communication/sdk-reference/ios-sdk/video-sdk-class",
            "realtime-communication/sdk-reference/ios-sdk/meeting-class",
            "realtime-communication/sdk-reference/ios-sdk/participant-class",
            "realtime-communication/sdk-reference/ios-sdk/stream-class",
            "realtime-communication/sdk-reference/ios-sdk/meeting-event-listener-class",
            "realtime-communication/sdk-reference/ios-sdk/participant-event-listener-class",
          ],
        },
        {
          type: "category",
          label: "FLUTTER SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/flutter-sdk/setup",
            "realtime-communication/sdk-reference/flutter-sdk/meeting-builder-widget",
            "realtime-communication/sdk-reference/flutter-sdk/meeting-class",
            "realtime-communication/sdk-reference/flutter-sdk/participant-class",
            "realtime-communication/sdk-reference/flutter-sdk/stream-class",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "SEE ALSO",
      items: [
        //"realtime-communication/see-also/architecture",
        "realtime-communication/see-also/device-browser-support",
        //"realtime-communication/see-also/demos",
        //"realtime-communication/see-also/hippa-healthcare",
      ],
      collapsed: false,
    },
  ],

  livestreamingSidebar: [
    {
      type: "category",
      label: "LIVE STREAMING",
      items: ["live-streaming/intro"],
      collapsed: false,
    },
    /*{
      type: "category",
      label: "GET STARTED",
      items: [
        "live-streaming/get-started/features",
        "live-streaming/get-started/live-streaming-with-rest-api",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "TUTORIALS",
      items: ["live-streaming/tutorials/live-streaming-tutorial"],
      collapsed: false,
    },*/
    {
      type: "category",
      label: "API REFERENCE",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "REST API REFERENCE",
          items: [
            "live-streaming/api-reference/auth",
            "live-streaming/api-reference/create-live-stream",
            "live-streaming/api-reference/list-live-streams",
            "live-streaming/api-reference/get-live-stream",
            "live-streaming/api-reference/update-live-stream",
            "live-streaming/api-reference/delete-live-stream",
          ],
          collapsed: false,
        },
      ],
    },
  ],

  videoondemandSidebar: [
    {
      type: "category",
      label: "VIDEO ON DEMAND",
      items: ["video-on-demand/intro"],
      collapsed: false,
    },
    {
      type: "category",
      label: "API REFERENCE",
      items: [
        {
          type: "category",
          label: "STORAGE REST API REFERENCE",
          items: [
            "video-on-demand/storage-api-reference/auth",
            "video-on-demand/storage-api-reference/create-new-url",
            "video-on-demand/storage-api-reference/upload-file",
            "video-on-demand/storage-api-reference/list-all-files",
            "video-on-demand/storage-api-reference/get-file-details",
            "video-on-demand/storage-api-reference/delete-file",
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "ENCODING REST API REFERENCE",
          items: [
            "video-on-demand/encoding-api-reference/auth",
            "video-on-demand/encoding-api-reference/create-encoding-job",
            "video-on-demand/encoding-api-reference/list-all-encoding-jobs",
            "video-on-demand/encoding-api-reference/get-encoding-job-details",
            "video-on-demand/encoding-api-reference/delete-encoding-job",
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
  ],

  tutorials: [
    {
      type: "category",
      label: "GET STARTED",
      items: ["tutorials/introduction"],
      collapsed: false,
    },
    {
      type: "category",
      label: "REAL TIME COMMUNICATION",
      items: [
        {
          type: "category",
          label: "Quickstart",
          collapsed: false,
          items: [
            "tutorials/realtime-communication/prebuilt-sdk/quickstart-prebuilt-js",
            "tutorials/realtime-communication/js-sdk/quickstart-js",
          ],
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "LIVE STREAMING",
      items: [
        {
          type: "category",
          label: "Quickstart",
          collapsed: false,
          items: ["tutorials/live-streaming/api/quickstart-rest-api"],
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "VIDEO ON DEMAND",
      items: [
        {
          type: "category",
          label: "Quickstart",
          collapsed: false,
          items: ["tutorials/video-on-demand/api/quickstart-rest-api"],
        },
      ],
      collapsed: false,
    },
  ],

  // resources: [
  //   {
  //     type: "category",
  //     label: "RESOURCES",
  //     items: ["resources/overview"],
  //     collapsed: false,
  //   },
  //   {
  //     type: "category",
  //     label: "CODE SAMPLES",
  //     items: [
  //       {
  //         type: "category",
  //         label: "RTC PREBUILT SDK",
  //         items: [
  //           //"resources/code-samples/real-time-communication/overview",
  //           "resources/code-samples/real-time-communication/js-prebuilt-sdk",
  //           "resources/code-samples/real-time-communication/angular-prebuilt-sdk",
  //           "resources/code-samples/real-time-communication/react-prebuilt-sdk",
  //           "resources/code-samples/real-time-communication/vue-prebuilt-sdk",
  //           "resources/code-samples/real-time-communication/android-prebuilt-sdk",
  //         ],
  //         collapsed: false,
  //       },
  //       {
  //         type: "category",
  //         label: "RTC RAW SDK",
  //         items: [
  //           //"resources/code-samples/real-time-communication/overview",
  //           "resources/code-samples/real-time-communication/node-js-auth",
  //           "resources/code-samples/real-time-communication/react-js-sdk",
  //           "resources/code-samples/real-time-communication/react-native-sdk",
  //           "resources/code-samples/real-time-communication/android-sdk",
  //         ],
  //         collapsed: false,
  //       },
  //       {
  //         type: "category",
  //         label: "LIVE STREAMING",
  //         items: [
  //           //"resources/code-samples/live-streaming/overview",
  //           "resources/code-samples/live-streaming/rtc-to-rtmp",
  //           "resources/code-samples/live-streaming/live-streaming-react",
  //           "resources/code-samples/live-streaming/live-streaming-react-native",
  //         ],
  //         collapsed: false,
  //       },
  //       {
  //         type: "category",
  //         label: "VIDEO ON DEMAND",
  //         items: [
  //           //"resources/code-samples/live-streaming/overview",
  //           "resources/code-samples/video-on-demand/react-js-sdk",
  //           "resources/code-samples/video-on-demand/react-native-sdk",
  //         ],
  //         collapsed: false,
  //       },
  //     ],
  //     collapsed: false,
  //   },
  // ],
};
