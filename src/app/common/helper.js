export const DebounceInput = (func, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

export const ConfigStatusTour = (status) => {
    switch (status) {
        case 1:
            return <div style={{ color: "rgb(46, 125, 50)" }}>Hoạt động </div>
        case 2:
            return <div style={{ color: "rgb(211, 47, 47)" }}>Đã xóa </div>
    }
}