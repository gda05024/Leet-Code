/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
    let current = init;

    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => {
            current = init;
            return current;
        }
    };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */