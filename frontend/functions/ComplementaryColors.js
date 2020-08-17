function complementCalculator(color){
    let complement = [0, 0, 0]

    for (let i = 0; i < color.length; i++) {
        const element = color[i];
        complement[i] = 255 - element
    }
    return complement
}

function complementLocator(color, colorList){
    const trueComplement = complementCalculator(color.rgb)
    let closestComplement
    let leastDelta = 765

    for (let i = 0; i < colorList.length; i++){
        const paint = colorList[i]
        const rgb = paint.rgb
        let delta = 0

        for (let i = 0; i < rgb.length; i++) {
            const element = rgb[i];
            delta += Math.abs(trueComplement[i] - element)
        }
        if (delta < leastDelta){
            leastDelta = delta
            closestComplement = paint
        }
    }
    return closestComplement
}

export default complementLocator