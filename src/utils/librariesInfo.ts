export const librariesInformation: Array<{
  name: string;
  description: string;
  documentationLink: string;
  rankings: Array<{
    name: string;
    description: string;
    rank: number;
    }>
}> = [
  {
    name: 'D3.js',
    description: 'D3 is quite unique in my list due to its focus on low-level implementation. When one chooses D3, it\'s important to understand its specific use cases. It\'s an excellent tool for creating SVG graphics without any limitations, aside from those inherent to SVG itself. Therefore, if there\'s a need to create visualisations beyond the more common types of charts and plots, D3 can be an excellent choice. Additionally, D3 is ideal for those building their own data visualisation libraries, as seen with Recharts (https://github.com/recharts/recharts), which is based on D3.',
    documentationLink: 'https://d3js.org/getting-started',
    rankings: [
      {
        name: 'Customization Level',
        description: 'It allows for everything SVG is capable of',
        rank: 5,
      },
      {
        name: 'Supported Types of Visualisation',
        description: 'As mentioned, there are no limitations on what can be created with it.',
        rank: 5,
      },
      {
        name: 'Popularity',
        description: 'It has over 2m weekly downloads from NPM',
        rank: 5,
      },
      {
        name: 'Ease of Use',
        description: 'Although D3 offers numerous methods with comprehensive documentation, creating a simple visualisation like a bar chart requires the use of about 20 different functions and methods from D3 (i.e., scaleBand, domain, groupSort, range, padding, scaleLinear, max, create, attr, append, selectAll, data, join, call, axisBottom, tickSizeOuter, axisLeft, tickFormat, remove, node).',
        rank: 1,
      },
      {
        name: 'Support of Animation',
        description: 'D3 allows almost limitless animation of SVG elements, but this is not quick or straightforward.',
        rank: 3,
      },
      {
        name: 'Support of User Interaction',
        description: 'I rate it highly because all elements in the visualisation (SVG) are created within the code, allowing for any logic based on user interactions. The complexity of setting up these interactions is not considered a drawback here, as custom interactions often require some level of coding, and in this case, it may not be the most complicated aspect.',
        rank: 5,
      }
    ]
  },
  {
    name: 'Chart.js',
    description: 'Chart.js is a popular high-level library for data visualisation based on HTML Canvas. It offers an easy setup and configuration process. The minimal configuration can be as simple as a few mandatory properties like \'type\' and \'data\', but it also supports hundreds of other configuration properties.',
    documentationLink: 'https://www.chartjs.org/docs/latest/',
    rankings: [
      {
        name: 'Customization Level',
        description: 'As a high-level data visualisation library, Chart.js allows extensive configuration for standard visualisation types, including rich options for titles, labels, and tooltips. For instance, there are 39 properties available just for tooltip configuration.',
        rank: 5,
      },
      {
        name: 'Supported Types of Visualisation',
        description: 'Chart.js supports all types introduced in my application, plus additional types like Polar Area Chart, Radar Chart, and Bubble Chart.',
        rank: 5,
      },
      {
        name: 'Popularity',
        description: 'It has over 2m weekly downloads from NPM',
        rank: 5,
      },
      {
        name: 'Ease of Use',
        description: 'With comprehensive documentation, its setup can be straightforward, requiring only the chart type and data.',
        rank: 5,
      },
      {
        name: 'Support of Animation',
        description: 'Chart.js offers built-in animation support, which can be disabled with a single property change. Its animation configuration allows for various customizations, including delay, duration, and easing functions.',
        rank: 5,
      },
      {
        name: 'Support of User Interaction',
        description: 'Chart.js provides numerous callback options in its configuration, such as \'mousemove\', \'mouseout\', \'click\', \'touchstart\', and \'touchmove\', and supports interactive tooltips out of the box. It earns a full score for its ability to add or write custom plugins with access to the Canvas context, further extending its interactive capabilities.',
        rank: 5,
      }
    ]
  },
  {
    name: 'Vega-Lite',
    description: 'Vega Lite stands out in my application\'s library list due to its extensive data handling capabilities, which include loading, preprocessing, transformation, and aggregation. It allows a choice of rendering types, either as an SVG element or on Canvas, and also supports selection, scaling, and zooming. Vega Lite seems like an ideal tool for data visualisation for statisticians, especially when rich animation options are not a priority. Another unique aspect is its reliance on JSON for configuration, potentially enabling its use without writing any JavaScript code.',
    documentationLink: 'https://vega.github.io/vega-lite/docs/',
    rankings: [
      {
        name: 'Customization Level',
        description: 'Vega Lite offers extensive configuration possibilities for almost everything except animation. Text positions and label scales are highly configurable, with hundreds, if not thousands, of options. However, its capabilities in animation are somewhat limited.',
        rank: 4,
      },
      {
        name: 'Supported Types of Visualisation',
        description: 'It supports all visualisations in my application and offers additional possibilities through its rich settings.',
        rank: 5,
      },
      {
        name: 'Popularity',
        description: 'It has over 100k weekly downloads from NPM',
        rank: 5,
      },
      {
        name: 'Ease of Use',
        description: 'While it can be configured with just a few lines of JSON, achieving specific outcomes might require more time and effort with the documentation.',
        rank: 4,
      },
      {
        name: 'Support of Animation',
        description: 'This library is more focused on data for statistical analysis than on creating visually appealing UI elements. The work \'Animated Vega-Lite: Unifying Animation with a Grammar of Interactive Graphics\' by Zong, J. et al. (2023) demonstrates an attempt to apply animation to Vega Lite, but this is achieved through custom plugins and extensions.',
        rank: 0,
      },
      {
        name: 'Support of User Interaction',
        description: 'It allows configurable tooltips with a variety of options, but the ability to animate these tooltips is limited.',
        rank: 3,
      }
    ]
  },
  {
    name: 'Chartist.js',
    description: 'Chartist.js appears to be a small and straightforward charting library. It uses SVG to render visualisations and is quite user-friendly. A minimal setup might consist of just a few configuration properties, such as a labels array and a series data array. However, its configuration options are relatively inflexible and less extensive compared to Chart.js, which can also be set up with a few lines of code.',
    documentationLink: 'https://chartist.dev/api/basics',
    rankings: [
      {
        name: 'Customization Level',
        description: 'Configuring labels requires using a third-party plugin (https://github.com/alexstanbury/chartist-plugin-axistitle), as mentioned in the library\'s documentation. Other configuration options are also limited, but the library\'s support for custom plugins offers the potential for more tailored visualisations, but with extra effort.',
        rank: 3,
      },
      {
        name: 'Supported Types of Visualisation',
        description: 'Chartist.js supports Bar, Line, and Pie charts. Notably, a Scatter Plot can be created using a Line chart.',
        rank: 3,
      },
      {
        name: 'Popularity',
        description: 'It has over 80k weekly downloads from NPM',
        rank: 5,
      },
      {
        name: 'Ease of Use',
        description: 'Chartist.js can be configured quickly, and basic examples are easily accessible in the documentation. However, I find the documentation somewhat disorganised. For instance, the API Documentation page lists all modules at the same level, lacking clear differentiation by purpose. An example of this is the Pie module, responsible for rendering Pie charts, being placed adjacent to the Class module, which contains only the \'extend\' method, with its usage examples located far from the pie chart information. Another issue is the lack of detailed types for some properties. For example, the Pie chart function accepts an \'options\' property, but the documentation simply lists its type as \'[options] (Object)\'.',
        rank: 3,
      },
      {
        name: 'Support of Animation',
        description: 'While animation is supported, there are no pre-configured, easy-to-use options; custom coding is required for animation.',
        rank: 3,
      },
      {
        name: 'Support of User Interaction',
        description: 'The library offers a few events for adding custom logic. Tooltips are also possible but require an additional plugin.',
        rank: 3,
      }
    ]
  },
  {
    name: 'ECHARTS',
    description: 'ECHARTS is a robust charting library that offers a balance between simplicity and depth. Its configuration can range from just a few basic properties to more complex aspects like styling, data handling, transformation, and event management.',
    documentationLink: 'https://echarts.apache.org/handbook/en/get-started',
    rankings: [
      {
        name: 'Customization Level',
        description: 'ECHARTS provides extensive options for label and title configuration, including size, font, and positioning. It also allows tooltip and animation customization, though animation options are limited to delay, duration, and easing functions.',
        rank: 5,
      },
      {
        name: 'Supported Types of Visualisation',
        description: 'ECHARTS supports all the visualisation types in my application and offers additional ones, such as effectScatter, parallel, candlestick, map, and funnel.',
        rank: 5,
      },
      {
        name: 'Popularity',
        description: 'It has over 600k weekly downloads from NPM',
        rank: 5,
      },
      {
        name: 'Ease of Use',
        description: 'ECHARTS is user-friendly and can be configured quickly. The documentation is well-organised, providing numerous default configurations that make even basic charts look appealing. The documentation also clearly explains how to configure animations and interactions. Additionally, it includes data transformation features that can be configured without needing to code.',
        rank: 5,
      },
      {
        name: 'Support of Animation',
        description: 'Animation is supported out-of-the-box, with basic configuration options that are easy to implement and well-documented. While the available options should suffice for most needs, achieving more complex animation requirements might be challenging.',
        rank: 5,
      },
      {
        name: 'Support of User Interaction',
        description: 'The library employs its own approach to events and actions. Popular features like tooltips are readily available, featuring extensive configuration options and well-structured documentation.',
        rank: 5,
      }
    ]
  },
  {
    name: 'Apex Charts',
    description: 'Apex Charts is another versatile JavaScript library for data visualisation, offering options for extensive configuration of various features, while also allowing for minimal setup with just a few specified properties. This library comes with built-in zooming, selection, and export functionalities.',
    documentationLink: 'https://apexcharts.com/docs/installation/',
    rankings: [
      {
        name: 'Customization Level',
        description: 'Apex Charts offers great flexibility in configuration. Titles and labels can be fully customised, including font, size, and positioning. Animation and tooltips are available out of the box, with comprehensive configuration options for both.',
        rank: 5,
      },
      {
        name: 'Supported Types of Visualisation',
        description: ' It supports all the visualisation types included in my application, plus additional ones like radar, tree map, and candlestick.',
        rank: 5,
      },
      {
        name: 'Popularity',
        description: 'It has over 600k weekly downloads from NPM',
        rank: 5,
      },
      {
        name: 'Ease of Use',
        description: 'The possibility of creating data visualisations, combined with extensive settings, allows for a wide range of configurations. The documentation is well-organised and includes examples for common scenarios.',
        rank: 5,
      },
      {
        name: 'Support of Animation',
        description: 'Animation is supported out of the box, with basic, easily implementable, and well-documented configuration options. However, more unique animation requirements may be more challenging to implement.',
        rank: 4,
      },
      {
        name: 'Support of User Interaction',
        description: 'Apex Charts enables subscribing to various events like animationEnd, beforeMount, mounted, updated, mouseMove, and mouseLeave, among others. It also supports features like zooming and exporting by default, along with advanced tooltip options.',
        rank: 5,
      }
    ]
  },
  {
    name: 'Frappe Charts',
    description: 'Frappe Charts is a small and simple library for data visualisation, with functionality that is limited compared to other libraries in my application.',
    documentationLink: 'https://frappe.io/charts/docs',
    rankings: [
      {
        name: 'Customization Level',
        description: 'Frappe Charts allows users to specify a title, but without additional settings such as position or font customization. Tooltips are available by default but cannot be disabled in the settings. The animation is very basic and lacks customization options.',
        rank: 1,
      },
      {
        name: 'Supported Types of Visualisation',
        description: 'It supports only Line, Pie, and Bar charts.',
        rank: 3,
      },
      {
        name: 'Popularity',
        description: 'It has slightly over 10k weekly downloads from NPM',
        rank: 4,
      },
      {
        name: 'Ease of Use',
        description: 'Frappe Charts is straightforward from both a usage and functionality standpoint. The documentation is concise, which is suitable given the library\'s limited scope. However, the lack of examples in the documentation can make it challenging to grasp.',
        rank: 4,
      },
      {
        name: 'Support of Animation',
        description: 'Animation is supported and enabled by default. It can be disabled by changing one property, but the animation itself is very basic and not adjustable.',
        rank: 2,
      },
      {
        name: 'Support of User Interaction',
        description: 'The library supports tooltips with a few customization options. According to the documentation, there seems to be no straightforward way to handle other user interactions with the visualisation.',
        rank: 2,
      }
    ]
  }
];
