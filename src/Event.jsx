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
            <span className={`event__icon event__icon_${icon}`} role="img" aria-label={iconLabel}></span>
            <h4 className="event__title">{title}</h4>
            {subtitle &&
                <span className="event__subtitle">{subtitle}</span>
            }
        </button>
    </li>;
}
