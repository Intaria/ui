import {createTheme} from '@mantine/core'

export const theme = createTheme({
    components: {
        Alert: {
            classNames: {
                root: 'ui-message',
                body: 'ui-message-body',
                label: 'ui-message-label',
                wrapper: 'ui-message-inner',
                icon: 'ui-message-icon',
                title: 'ui-message-title',
                message: 'ui-message-text',
                closeButton: 'ui-message-button'
            }
        },
        AreaChart: {
            classNames: {
                //TODO
            }
        },
        AspectRatio: {
            classNames: {
                root: 'ui-aspect-ratio'
            }
        },
        Autocomplete: {
            classNames: {
                wrapper: 'ui-autocomplete-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-autocomplete',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error',
                dropdown: 'ui-dropdown',
                options: 'ui-dropdown-options',
                option: 'ui-dropdown-option',
                group: 'ui-autocomplete-group',
                groupLabel: 'ui-label'
            }
        },
        Avatar: {
            classNames: {
                root: 'ui-avatar',
                image: 'ui-avatar-image',
                placeholder: 'ui-avatar-placeholder'
            }
        },
        AvatarGroup: {
            classNames: {
                group: 'ui-avatar-group',
            }
        },
        Badge: {
            classNames: {
                root: 'ui-badge',
                section: 'ui-badge-section',
                label: 'ui-badge-label'
            }
        },
        BarChart: {
            classNames: {
                //TODO
            }
        },
        Blockquote: {
            classNames: {
                root: 'ui-blockquote',
                icon: 'ui-icon',
                cite: 'ui-blockquote-cite'
            }
        },
        Breadcrumbs: {
            classNames: {
                root: 'ui-breadcrumbs',
                separator: 'ui-breadcrumbs-separator',
                breadcrumb: 'ui-breadcrumbs-item'
            }
        },
        Button: {
            classNames: {
                root: 'ui-button',
                loader: 'ui-spinner',
                inner: 'ui-button-inner',
                section: 'ui-section',
                label: 'ui-label'
            }
        },
        Calendar: {
            classNames: {
                //TODO
            }
        },
        Carousel: {
            classNames: {
                root: 'ui-carousel',
                slider: 'ui-carousel-slider',
                container: 'ui-carousel-slides',
                viewport: 'ui-carousel-inner',
                controls: 'ui-controls',
                control: 'ui-control',
                indicators: 'ui-carousel-indicators',
                indicator: 'ui-carousel-indicator'
            }
        },
        Checkbox: {
            classNames: {
                root: 'ui-checkbox',
                input: '',
                icon: 'ui-icon',
                inner: 'ui-checkbox-inner',
                body: 'ui-checkbox-body',
                labelWrapper: 'ui-label-wrapper',
                label: 'ui-label',
                description: 'ui-text',
                error: 'ui-error'
            }
        },
        Chip: {
            classNames: {
                root: 'ui-chip',
                checkIcon: 'ui-icon',
                iconWrapper: 'ui-icon-wrapper',
                input: 'ui-input',
                label: 'ui-label',
            }
        },
        Code: {
            classNames: {
                root: 'ui-code'
            }
        },
        ColorInput: {
            classNames: {
                //TODO
            }
        },
        ColorPicker: {
            classNames: {
                //TODO
            }
        },
        Combobox: {
            classNames: {
                options: 'ui-dropdown-options',
                dropdown: 'ui-dropdown',
                option: 'ui-dropdown-option',
                search: 'ui-input ui-input-search',
                empty: 'ui-dropdown-empty',
                header: 'ui-dropdown-header',
                footer: 'ui-dropdown-footer',
                group: 'ui-dropdown-group',
                groupLabel: 'ui-label'
            }
        },
        DatePicker: {
            classNames: {
                //TODO
            }
        },
        DatePickerInput: {
            classNames: {
                //TODO
            }
        },
        Dialog: {
            classNames: {
                root: 'ui-dialog',
                closeButton: 'ui-button ui-button-close'
            }
        },
        Divider: {
            classNames: {
                root: 'ui-divider',
                label: 'ui-divider-label'
            }
        },
        DonutChart: {
            classNames: {
                //TODO
            }
        },
        Drawer: {
            classNames: {
                root: 'ui-drawer',
                inner: 'ui-drawer-inner',
                content: 'ui-drawer-container',
                header: 'ui-drawer-header',
                overlay: 'ui-overlay',
                title: 'ui-drawer-title',
                body: 'ui-drawer-body',
                close: 'ui-button ui-button-close'
            }
        },
        Dropzone: {
            classNames: {
                root: 'ui-dropzone',
                inner: 'ui-dropzone-inner'
            }
        },
        Image: {
            classNames: {
                root: 'ui-image'
            }
        },
        Indicator: {
            classNames: {
                root: 'ui-indicator',
                indicator: 'ui-indicator-point'
            }
        },
        Fieldset: {
            classNames: {
                root: 'ui-fieldset',
                legend: 'ui-fieldset-legend'
            }
        },
        FileInput: {
            classNames: {
                wrapper: 'ui-input-file-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-input-file',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error'
            }
        },
        Highlight: {
            classNames: {
                root: 'ui-highlight'
            }
        },
        Input: {
            classNames: {
                wrapper: 'ui-input',
                input: '',
                section: 'ui-section',
            }
        },
        JsonInput: {
            classNames: {
                wrapper: 'ui-input-json-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-input-json',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error'
            }
        },
        Kbd: {
            classNames: {
                root: 'ui-kbd'
            }
        },
        LineChart: {
            classNames: {
                //TODO
            }
        },
        List: {
            classNames: {
                root: 'ui-list',
                item: 'ui-list-item',
                itemIcon: 'ui-icon',
                itemLabel: 'ui-label',
                itemWrapper: 'ui-list-item-inner'
            }
        },
        Loader: {
            classNames: {
                root: 'ui-spinner',
            }
        },
        LoadingOverlay: {
            classNames: {
                root: 'ui-loading',
                overlay: 'ui-loading-overlay',
                loader: 'ui-loading-spinner'
            }
        },
        Menu: {
            classNames: {
                dropdown: 'ui-menu',
                arrow: 'ui-arrow',
                divider: 'ui-divider',
                label: 'ui-label',
                item: 'ui-menu-item',
                itemLabel: 'ui-label',
                itemSection: 'ui-section'
            }
        },
        Modal: {
            classNames: {
                root: 'ui-modal',
                inner: 'ui-modal-inner',
                content: 'ui-modal-container',
                header: 'ui-modal-header',
                overlay: 'ui-overlay',
                title: 'ui-modal-title',
                body: 'ui-modal-body',
                close: 'ui-button ui-button-close'
            }
        },
        MonthPicker: {
            classNames: {
                //TODO
            }
        },
        MonthPickerInput: {
            classNames: {
                //TODO
            }
        },
        MultiSelect: {
            classNames: {
                wrapper: 'ui-select-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-select ui-select-multiple',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error',
                dropdown: 'ui-dropdown',
                options: 'ui-dropdown-options',
                option: 'ui-dropdown-option',
                empty: 'ui-dropdown-empty',
                group: 'ui-dropdown-group',
                groupLabel: 'ui-label',
                pill: 'ui-pill',
                inputField: '',
                pillsList: 'ui-pills'
            }
        },
        Notification: {
            classNames: {
                root: 'ui-notification',
                loader: 'ui-notification-spinner',
                icon: 'ui-notification-icon',
                body: 'ui-notification-body',
                title: 'ui-notification-title',
                description: 'ui-notification-text',
                closeButton: 'ui-notification-button'
            }
        },
        Notifications: {
            classNames: {
                root: 'ui-notifications',
                notification: 'ui-notification'
            }
        },
        NumberInput: {
            classNames: {
                wrapper: 'ui-input-number-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-input-number',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error',
                controls: 'ui-controls',
                control: 'ui-control'
            }
        },
        Overlay: {
            classNames: {
                root: 'ui-overlay'
            }
        },
        Pagination: {
            classNames: {
                root: 'ui-pagination',
                control: 'ui-pagination-control',
                dots: 'ui-pagination-dots',
            }
        },
        PasswordInput: {
            classNames: {
                wrapper: 'ui-input-password-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-input-password',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error',
                innerInput: '',
                visibilityToggle: 'ui-control'
            }
        },
        PieChart: {
            classNames: {
                //TODO
            }
        },
        PinInput: {
            classNames: {
                root: 'ui-input-pin',
                pinInput: 'ui-input-pin-item',
                input: 'ui-input'
            }
        },
        Popover: {
            classNames: {
                dropdown: 'ui-popover',
                arrow: 'ui-arrow'
            }
        },
        Progress: {
            classNames: {
                root: 'ui-progress',
                section: 'ui-progress-section',
                label: 'ui-progress-label'
            }
        },
        RadarChart: {
            classNames: {
                //TODO
            }
        },
        Radio: {
            classNames: {
                root: 'ui-radio',
                radio: '',
                icon: 'ui-icon',
                inner: 'ui-radio-inner',
                body: 'ui-radio-body',
                labelWrapper: 'ui-label-wrapper',
                label: 'ui-label',
                description: 'ui-text',
                error: 'ui-error'
            }
        },
        Rating: {
            classNames: {
                root: 'ui-rating',
                starSymbol: 'ui-rating-symbol',
                input: '',
                label: 'ui-label',
                symbolBody: 'ui-rating-symbol-wrapper',
                symbolGroup: 'ui-rating-symbols'
            }
        },
        RingProgress: {
            classNames: {
                root: 'ui-ring-progress',
                svg: 'ui-ring-progress-svg',
                curve: 'ui-ring-progress-curve',
                label: 'ui-ring-progress-label'
            }
        },
        ScatterChart: {
            classNames: {
                //TODO
            }
        },
        ScrollArea: {
            classNames: {
                root: 'ui-scroll',
                viewport: 'ui-scroll-inner',
                scrollbar: 'ui-scroll-bar',
                thumb: 'ui-scroll-thumb',
                corner: 'ui-scroll-corner'
            }
        },
        SegmentedControl: {
            classNames: {
                root: 'ui-radio-group',
                control: 'ui-control',
                input: '',
                label: 'ui-label',
                indicator: 'ui-radio-group-indicator',
                innerLabel: 'ui-label-inner',
            }
        },
        Select: {
            classNames: {
                wrapper: 'ui-select-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-select',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error',
                dropdown: 'ui-dropdown',
                options: 'ui-dropdown-options',
                option: 'ui-dropdown-option',
                empty: 'ui-dropdown-empty',
                group: 'ui-dropdown-group',
                groupLabel: 'ui-label'
            }
        },
        Skeleton: {
            classNames: {
                root: 'ui-skeleton'
            }
        },
        Slider: {
            classNames: {
                root: 'ui-slider',
                label: 'ui-label',
                thumb: 'ui-slider-thumb',
                trackContainer: 'ui-slider-track-wrapper',
                track: 'ui-slider-track',
                bar: 'ui-slider-bar',
                markWrapper: 'ui-slider-mark-wrapper',
                mark: 'ui-slider-mark',
                markLabel: 'ui-label'
            }
        },
        Spoiler: {
            classNames: {
                root: 'ui-spoiler',
                content: 'ui-spoiler-container',
                control: 'ui-control'
            }
        },
        Stepper: {
            classNames: {
                root: 'ui-stepper',
                steps: 'ui-stepper-steps',
                separator: 'ui-stepper-separator',
                verticalSeparator: 'ui-stepper-separator',
                content: 'ui-stepper-content',
                stepWrapper: 'ui-step-wrapper',
                step: 'ui-stepper-step',
                stepIcon: 'ui-stepper-icon',
                stepCompletedIcon: 'ui-stepper-icon-completed',
                stepBody: 'ui-stepper-step-body',
                stepLabel: 'ui-stepper-label',
                stepDescription: 'ui-stepper-description',
                stepLoader: 'ui-spinner'
            }
        },
        Switch: {
            classNames: {
                root: 'ui-switch',
                track: 'ui-switch-track',
                trackLabel: 'ui-label',
                thumb: 'ui-switch-thumb',
                input: '',
                body: 'ui-switch-body',
                labelWrapper: 'ui-label-wrapper',
                label: 'ui-label',
                description: 'ui-text',
                error: 'ui-error'
            }
        },
        Table: {
            classNames: {
                table: 'ui-table',
                thead: 'ui-table-header',
                tbody: 'ui-table-body',
                tfoot: 'ui-table-footer',
                tr: 'ui-table-tr',
                th: 'ui-table-th',
                td: 'ui-table-td',
                caption: 'ui-table-caption',
                //TODO: check if work
                scrollContainer: 'ui-table-scroll-container',
                //TOOD: check if work
                scrollContainerInner: 'ui-table-scroll-container-inner'
            }
        },
        Tabs: {
            classNames: {
                root: 'ui-tabs',
                list: 'ui-tabs-controls',
                panel: 'ui-tabs-body',
                tab: 'ui-tabs-control',
                tabLabel: 'ui-tabs-label',
                tabSection: 'ui-tabs-section',
            }
        },
        Text: {
            classNames: {
                root: 'ui-text'
            }
        },
        Textarea: {
            classNames: {
                wrapper: 'ui-textarea-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-textarea',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error'
            }
        },
        TextInput: {
            classNames: {
                wrapper: 'ui-input-text-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-input-text',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error'
            }
        },
        TimeInput: {
            classNames: {
                wrapper: 'ui-input-time-inner',
                input: 'ui-input',
                section: 'ui-section',
                root: 'ui-input-time',
                label: 'ui-label',
                required: 'ui-required',
                description: 'ui-text',
                error: 'ui-error'
            }
        },
        Timeline: {
            classNames: {
                root: 'ui-timeline',
                item: 'ui-timeline-item',
                itemBody: 'ui-timeline-item-body',
                itemTitle: 'ui-timeline-item-title',
                itemContent: 'ui-timeline-item-body',
                itemBullet: 'ui-timeline-item-bullet'
            }
        },
        Tooltip: {
            classNames: {
                tooltip: 'ui-tooltip',
                arrow: 'ui-arrow'
            }
        },
        YearPicker: {
            classNames: {
                //TODO
            }
        },
        YearPickerInput: {
            classNames: {
                //TODO
            }
        },
    }
})