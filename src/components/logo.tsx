const Logo: React.FC<{ color?: string }> = ({ color = "white" }) => (
  <svg
    id="Layer_2"
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 791.75 791.75"
    style={{
      fill: "none",
      stroke: color,
      strokeWidth: "15px",
      strokeMiterlimit: 10,
    }}
    height="2.75rem">
    <polygon
      className="cls-1"
      points="196.89 57.49 330.86 132.21 418.9 158.67 591.28 117.02 531 211.24 542.47 343.3 494.34 357.08 634.45 464.08 665.73 567.35 540.79 717.7 383.63 734.26 271.97 681.64 324.85 618.95 264.25 438.27 232.09 334.67 161.07 290.23 213.88 173.94 196.89 57.49"
    />
    <line className="cls-1" x1="161.07" y1="290.23" x2="336.54" y2="133.92" />
    <polyline
      className="cls-1"
      points="377.36 146.19 339.45 390.69 307 416.44 266.1 351.93 209.87 320.77"
    />
    <line className="cls-1" x1="414.07" y1="159.18" x2="542.47" y2="343.3" />
    <polyline
      className="cls-1"
      points="494.34 357.08 453.52 361.38 391.08 520.56 436.88 561.11 621.76 474.97 462.75 712.11 452.43 727.01"
    />
    <polyline
      className="cls-1"
      points="458.71 717.94 397.73 583.69 436.88 561.11"
    />
    <line className="cls-1" x1="397.73" y1="583.69" x2="324.85" y2="618.95" />
    <line className="cls-1" x1="391.08" y1="520.56" x2="351.86" y2="605.88" />
    <polyline
      className="cls-1"
      points="335.51 611.95 336.31 460.58 307 416.44"
    />
    <polyline
      className="cls-1"
      points="336.31 460.58 372.83 424.04 339.45 390.69"
    />
    <polyline
      className="cls-1"
      points="372.83 424.04 435.57 363.27 453.52 361.38"
    />
  </svg>
);

export default Logo;
