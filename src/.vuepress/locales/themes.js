module.exports = {
    '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
            {
                text: 'Learn',
                link: '/docs/getting-started'
            },
            {
                text: 'Editor',
                link: 'https://editor.easylogic.studio'
            },
            {
                text: 'Family',
                items: [
                    {
                        text: 'Sapa',
                        link: 'https://github.com/easylogic/sapa/'
                    }, 
                    {
                        text: 'Anipa',
                        link: 'https://github.com/easylogic/anipa/'
                    },                     
                    {
                        text: 'ColorPicker',
                        link: 'https://colorpicker.easylogic.studio/colorpicker/'
                    }, 
                    {
                        text: 'Gradient',
                        link: 'https://colorpicker.easylogic.studio/gradient/'
                    }
                ]
            }           
        ],
        // sidebar: 'auto'
        sidebar: {
            '/docs/': [

                'getting-started',
                {
                    title: 'Interface',
                    collapsable: false,
                    children: [
                        'interface/layer-list',
                        'interface/element-view',
                        'interface/inspector',
                        'interface/toolbar',
                        'interface/timeline'
                    ]
                },
                {
                    title: 'Basics',
                    collapsable: false,
                    children: [
                        'basics/layer',
                        'basics/adding-layers',
                        'basics/selecting-layers',
                        'basics/moving-layers',
                        'basics/resizing-layers',
                        'basics/transforming-layers'
                    ]
                },
                {
                    title: 'Vector Tool',
                    collapsable: false,
                    children: [
                        'vector-tool/path',
                        'vector-tool/polygon',
                        'vector-tool/star'
                    ]
                },
                {
                    title: 'Grouping',
                    collapsable: false,
                    children: [ 
                        'grouping-layers/projects',
                        'grouping-layers/artboards',
                        'grouping-layers/layers'
                    ]
                },
                {
                    title: 'Styling',
                    collapsable: false,
                    children: [
                        'styling/colors',
                        'styling/borders',
                        'styling/background-images',
                        'styling/box-shadows',
                        'styling/text-shadows',
                        'styling/filter',
                        'styling/clip-path',
                        'styling/misc',
                        'styling/vector-tool'
                    ]
                },
                {
                    title: 'CSS Transition & Animation',
                    collapsable: false,
                    children: [
                        'animation/transitions',
                        'animation/keyframes-animations',
                        'animation/selector'                       
                    ]
                },
                {
                    title: 'Timeline Animation',
                    collapsable: false,
                    children: [
                        'timeline/animation-list',
                        'timeline/time-control',
                        'timeline/play-control',
                        'timeline/add-keyframe',                        
                        'timeline/property-list',                        
                        'timeline/keyframe-list',
                        'timeline/value-editor',
                        'timeline/timing-editor'
                    ]
                },
                {
                    title: 'Exporting',
                    collapsable: false,
                    children: [
                        'exporting/default',
                        'exporting/code-view',
                        'exporting/share'
                    ]
                },
                {
                    title: 'Importing',
                    collapsable: false,
                    children: [
                        'importing/image',
                        'importing/text'
                    ]
                },                
                {
                    title: 'Assets',
                    collapsable: false,
                    children: [
                        'assets/color',
                        'assets/gradient',
                        'assets/svgfilter',
                        'assets/image'
                    ]
                }

            ],
      
            // fallback
            '/': [
              ''
            ]
        }
    }
}