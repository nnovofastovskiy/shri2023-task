import React from "react";

export function Event({ onSize, slim, icon, iconLabel, title, subtitle }) {
    const ref = React.useRef();

    React.useEffect(() => {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        if (onSize) {
            onSize({ width, height });
        }
    });

    return <li ref={ref} className={'event' + (slim ? ' event_slim' : '')}>
        <button className="event__button">
            <span className={`event__icon`} role="img" aria-label={iconLabel}>
                {icon === 'temp' &&
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <title>icon_temperature</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="v1-2-1-home-dashboard" transform="translate(-464.000000, -269.000000)">
                                <rect fill="#F8F8F8" x="0" y="0" width="1366" height="768"></rect>
                                <g id="status" transform="translate(39.000000, 195.000000)">
                                    <g id="Group" transform="translate(1.000000, 40.000000)">
                                        <g id="Widget" transform="translate(410.000000, 20.000000)">
                                            <g id="icon_temperature" transform="translate(14.000000, 14.000000)">
                                                <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                                <path d="M14.0003489,14.76 L14.0003489,3.5 C14.0003489,2.11928813 12.8810608,1 11.5003489,1 C10.119637,1 9.00034891,2.11928813 9.00034891,3.5 L9.00034891,14.76 C7.35223452,15.8611927 6.61873572,17.911099 7.19410587,19.8079004 C7.76947602,21.7047019 9.51820196,23.0016574 11.5003489,23.0016574 C13.4824959,23.0016574 15.2312218,21.7047019 15.806592,19.8079004 C16.3819621,17.911099 15.6484633,15.8611927 14.0003489,14.76 Z" id="Shape" stroke-opacity="0.4" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <circle id="Oval-2" fill-opacity="0.1" fill="#333333" fill-rule="nonzero" cx="11.5" cy="18.5" r="3.5"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                }
                {icon === 'temp2' &&
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <title>icon_temperature_2</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="v1-2-1-home-dashboard" transform="translate(-925.000000, -365.000000)">
                                <rect fill="#F8F8F8" x="0" y="0" width="1366" height="768"></rect>
                                <g id="scenarios" transform="translate(696.000000, 196.000000)">
                                    <g id="Widget-Copy-7" transform="translate(215.000000, 155.000000)">
                                        <g id="icon_temperature" transform="translate(14.000000, 14.000000)">
                                            <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                            <g id="thermometer" transform="translate(7.000000, 1.000000)">
                                                <path d="M7,13.76 L7,2.5 C7,1.11928813 5.88071187,0 4.5,0 C3.11928813,-2.22044605e-16 2,1.11928813 2,2.5 L2,13.76 C0.351885607,14.8611927 -0.381613186,16.911099 0.19375696,18.8079004 C0.769127106,20.7047019 2.51785305,22.0016574 4.5,22.0016574 C6.48214695,22.0016574 8.23087289,20.7047019 8.80624304,18.8079004 C9.38161319,16.911099 8.64811439,14.8611927 7,13.76 Z" id="Shape" stroke="#F5A623" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <circle id="Oval-2" fill="#FFD93E" fill-rule="nonzero" cx="4.5" cy="17.5" r="3.5"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                }
                {icon === 'light' &&
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <title>icon_sun</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="v1-2-1-home-dashboard" transform="translate(-464.000000, -404.000000)">
                                <rect fill="#F8F8F8" x="0" y="0" width="1366" height="768"></rect>
                                <g id="status" transform="translate(39.000000, 195.000000)">
                                    <g id="Group" transform="translate(1.000000, 40.000000)">
                                        <g id="Widget-Copy" transform="translate(410.000000, 155.000000)">
                                            <g id="icon" transform="translate(14.000000, 14.000000)">
                                                <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                                <g id="sun" transform="translate(1.000000, 1.000000)" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                    <circle id="Oval" stroke-opacity="0.4" cx="11" cy="11" r="5"></circle>
                                                    <path d="M11,0 L11,2" id="Shape" stroke-opacity="0.1"></path>
                                                    <path d="M11,20 L11,22" id="Shape" stroke-opacity="0.1"></path>
                                                    <path d="M3.22,3.22 L4.64,4.64" id="Shape" stroke-opacity="0.1"></path>
                                                    <path d="M17.36,17.36 L18.78,18.78" id="Shape" stroke-opacity="0.1"></path>
                                                    <path d="M0,11 L2,11" id="Shape" stroke-opacity="0.1"></path>
                                                    <path d="M20,11 L22,11" id="Shape" stroke-opacity="0.1"></path>
                                                    <path d="M3.22,18.78 L4.64,17.36" id="Shape" stroke-opacity="0.1"></path>
                                                    <path d="M17.36,4.64 L18.78,3.22" id="Shape" stroke-opacity="0.1"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                }
                {icon === 'light2' &&
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <title>icon_sun_2</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="v1-2-1-home-dashboard" transform="translate(-1140.000000, -250.000000)">
                                <rect fill="#F8F8F8" x="0" y="0" width="1366" height="768"></rect>
                                <g id="scenarios" transform="translate(696.000000, 196.000000)">
                                    <g id="Widget-Copy-5" transform="translate(430.000000, 40.000000)">
                                        <g id="icon" transform="translate(14.000000, 14.000000)">
                                            <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                            <g id="sun" transform="translate(1.000000, 1.000000)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                <circle id="Oval" stroke="#F5A623" cx="11" cy="11" r="5"></circle>
                                                <path d="M11,0 L11,2" id="Shape" stroke="#FFD93E"></path>
                                                <path d="M11,20 L11,22" id="Shape" stroke="#FFD93E"></path>
                                                <path d="M3.22,3.22 L4.64,4.64" id="Shape" stroke="#FFD93E"></path>
                                                <path d="M17.36,17.36 L18.78,18.78" id="Shape" stroke="#FFD93E"></path>
                                                <path d="M0,11 L2,11" id="Shape" stroke="#FFD93E"></path>
                                                <path d="M20,11 L22,11" id="Shape" stroke="#FFD93E"></path>
                                                <path d="M3.22,18.78 L4.64,17.36" id="Shape" stroke="#FFD93E"></path>
                                                <path d="M17.36,4.64 L18.78,3.22" id="Shape" stroke="#FFD93E"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                }
                {icon === 'schedule' &&
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <title>icon_scheduled</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="v1-2-1-home-dashboard" transform="translate(-925.000000, -250.000000)">
                                <rect fill="#F8F8F8" x="0" y="0" width="1366" height="768"></rect>
                                <g id="scenarios" transform="translate(696.000000, 196.000000)">
                                    <g id="Widget-Copy-4" transform="translate(215.000000, 40.000000)">
                                        <g id="icon" transform="translate(14.000000, 14.000000)">
                                            <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                            <g id="clock" transform="translate(2.000000, 2.000000)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                <circle id="Oval" cx="10" cy="10" r="10"></circle>
                                                <polyline id="Shape" opacity="0.3" points="10 4 10 10 13 13"></polyline>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                }
            </span>
            <h4 className="event__title">{title}</h4>
            {subtitle &&
                <span className="event__subtitle">{subtitle}</span>
            }
        </button>
    </li>;
}