export function Sk({ w = "100%", h = "16px", r = "8px", mb = "0px" }) {
    return (
        <div
            className="skeleton"
            style={{
                width: w,
                height: h,
                borderRadius: r,
                marginBottom: mb,
                flexShrink: 0,
            }}
        />
    );
}
