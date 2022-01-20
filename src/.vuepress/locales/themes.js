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
                link: 'https://editor-core.easylogic.studio'
            },
            {
                text: 'Family',
                items: [
                    {
                        text: 'Sapa',
                        link: 'https://sapa.easylogic.studio/'
                    }, 
                    {
                        text: 'Anipa',
                        link: 'https://github.com/easylogic/anipa/'
                    },                     
                    {
                        text: 'ColorPicker',
                        link: 'https://colorpicker.easylogic.studio/'
                    }, 
                    {
                        text: 'Gradient',
                        link: 'https://gradient.easylogic.studio/'
                    }
                ]
            }           
        ],
        // sidebar: 'auto'
        sidebar: {
            '/docs/': [

                'getting-started',
                {
                    title: 'Editor',
                    collapsable: false,
                    children: [
                        'interface/layer-list',
                        'interface/canvas',
                        'interface/inspector',
                        'interface/toolbar',
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
    },

    '/ko/': {
        selectText: '언어선택',
        label: '한국어',
        nav: [
            {
                text: '배우기',
                link: '/ko/getting-started'
            },
            {
                text: '에디터',
                link: 'https://editor-core.easylogic.studio'
            },
            {
                text: '연관된 라이브러리',
                items: [
                    {
                        text: 'Sapa',
                        link: 'https://sapa.easylogic.studio/'
                    }, 
                    {
                        text: 'Anipa',
                        link: 'https://github.com/easylogic/anipa/'
                    },                     
                    {
                        text: 'ColorPicker',
                        link: 'https://colorpicker.easylogic.studio/'
                    }, 
                    {
                        text: 'Gradient',
                        link: 'https://gradient.easylogic.studio/'
                    }
                ]
            }           
        ],
        // sidebar: 'auto'
        sidebar: {
            '/ko/': [

                'getting-started',
                {
                    title: '에디터',
                    collapsable: false,
                    children: [
                        'interface/layer-list',
                        'interface/canvas',
                        'interface/inspector',
                        'interface/toolbar',
                    ]
                },
                {
                    title: '레이어 기본',
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
                    title: '벡터 툴',
                    collapsable: false,
                    children: [
                        'vector-tool/path',
                        'vector-tool/polygon',
                        'vector-tool/star'
                    ]
                },
                {
                    title: '그룹',
                    collapsable: false,
                    children: [ 
                        'grouping-layers/projects',
                        'grouping-layers/artboards',
                        'grouping-layers/layers'
                    ]
                },
                {
                    title: '스타일',
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
                    title: 'CSS Transition과 Animation',
                    collapsable: false,
                    children: [
                        'animation/transitions',
                        'animation/keyframes-animations',
                        'animation/selector'                       
                    ]
                },
                {
                    title: '타임라인 애니메이션',
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
                    title: '내보내기',
                    collapsable: false,
                    children: [
                        'exporting/default',
                        'exporting/code-view',
                        'exporting/share'
                    ]
                },
                {
                    title: '객체 추가하기',
                    collapsable: false,
                    children: [
                        'importing/image',
                        'importing/text'
                    ]
                },                
                {
                    title: '에셋관리',
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