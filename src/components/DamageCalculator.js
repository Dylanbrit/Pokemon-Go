export const DamageCalculatorElectric = (data) => {
    let damage = 0
    const type = data
    
    if (type === 'electric') {
        damage = 1
    } else if (type === 'grass') {
        damage = 1
    } else if (type === 'fire') {
        damage = 2
    } else if (type === 'water') {
        damage = 4
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 2
    } else if (type === 'ground') {
        damage = 0
    } else if (type === 'flying') {
        damage = 4
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 1
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 2
    }
    
    return damage
}

export const DamageCalculatorGrass = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 1
    } else if (type === 'fire') {
        damage = 1
    } else if (type === 'water') {
        damage = 4
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 1
    } else if (type === 'poison') {
        damage = 1
    } else if (type === 'rock') {
        damage = 4
    } else if (type === 'ground') {
        damage = 4
    } else if (type === 'flying') {
        damage = 1
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 1
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorFire = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 4
    } else if (type === 'fire') {
        damage = 1
    } else if (type === 'water') {
        damage = 1
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 4
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 1
    } else if (type === 'ground') {
        damage = 1
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 4
    } else if (type === 'dragon') {
        damage = 1
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 4
    }

    return damage
}

export const DamageCalculatorWater = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 1
    } else if (type === 'fire') {
        damage = 4
    } else if (type === 'water') {
        damage = 1
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if ( type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 4
    } else if (type === 'ground') {
        damage = 4
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 1
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 2
    }

    return damage
}

export const DamageCalculatorNormal = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 2
    } else if (type === 'fire') {
        damage = 2
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 1
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 0
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorFighting = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 2
    } else if (type === 'fire') {
        damage = 2
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 4
    } else if (type === 'psychic') {
        damage = 1
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 1
    } else if (type === 'poison') {
        damage = 1
    } else if (type === 'rock') {
        damage = 4
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 1
    } else if (type === 'ghost') {
        damage = 0
    } else if (type === 'ice') {
        damage = 4
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 4
    } else if (type === 'steel') {
        damage = 4
    }

    return damage
}

export const DamageCalculatorPsychic = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 2
    } else if (type === 'fire') {
        damage = 2
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 1
    } else if (type === 'fighting') {
        damage = 4
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 4
    } else if (type === 'rock') {
        damage = 2
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 0
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorBug = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 4
    } else if (type === 'fire') {
        damage = 1
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 4
    } else if (type === 'fighting') {
        damage = 1
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 1
    } else if (type === 'rock') {
        damage = 2
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 1
    } else if (type === 'ghost') {
        damage = 1
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 4
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorPoison = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 4
    } else if (type === 'fire') {
        damage = 2
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 1
    } else if (type === 'rock') {
        damage = 1
    } else if (type === 'ground') {
        damage = 1
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 1
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 0
    }

    return damage
}

export const DamageCalculatorRock = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 2
    } else if (type === 'fire') {
        damage = 4
    } else if (type === 'water') {
        damage = 4
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 1
    } else if (type === 'bug') {
        damage = 4
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 2
    } else if (type === 'ground') {
        damage = 1
    } else if (type === 'flying') {
        damage = 4
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 4
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorGround = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 4
    } else if (type === 'grass') {
        damage = 1
    } else if (type === 'fire') {
        damage = 4
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 1
    } else if (type === 'poison') {
        damage = 4
    } else if (type === 'rock') {
        damage = 4
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 0
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 4
    }

    return damage
}

export const DamageCalculatorFlying = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 1
    } else if (type === 'grass') {
        damage = 4
    } else if (type === 'fire') {
        damage = 2
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 4
    } else if (type === 'bug') {
        damage = 4
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 1
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorGhost = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 2
    } else if (type === 'fire') {
        damage = 2
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 4
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 2
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 4
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 1
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorIce = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 4
    } else if (type === 'fire') {
        damage = 1
    } else if (type === 'water') {
        damage = 1
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 2
    } else if (type === 'ground') {
        damage = 4
    } else if (type === 'flying') {
        damage = 4
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 1
    } else if (type === 'dragon') {
        damage = 4
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorDragon = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 2
    } else if (type === 'fire') {
        damage = 2
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 2
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 4
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorDark = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 2
    } else if (type === 'grass') {
        damage = 2
    } else if (type === 'fire') {
        damage = 2
    } else if (type === 'water') {
        damage = 2
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 4
    } else if (type === 'fighting') {
        damage = 1
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 2
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 4
    } else if (type === 'ice') {
        damage = 2
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 1
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}

export const DamageCalculatorSteel = (data) => {
    let damage = 0
    const type = data
    if (type === 'electric') {
        damage = 1
    } else if (type === 'grass') {
        damage = 2
    } else if (type === 'fire') {
        damage = 1
    } else if (type === 'water') {
        damage = 1
    } else if (type === 'normal') {
        damage = 2
    } else if (type === 'psychic') {
        damage = 2
    } else if (type === 'fighting') {
        damage = 2
    } else if (type === 'bug') {
        damage = 2
    } else if (type === 'poison') {
        damage = 2
    } else if (type === 'rock') {
        damage = 4
    } else if (type === 'ground') {
        damage = 2
    } else if (type === 'flying') {
        damage = 2
    } else if (type === 'ghost') {
        damage = 2
    } else if (type === 'ice') {
        damage = 4
    } else if (type === 'dragon') {
        damage = 2
    } else if (type === 'dark') {
        damage = 2
    } else if (type === 'steel') {
        damage = 1
    }

    return damage
}