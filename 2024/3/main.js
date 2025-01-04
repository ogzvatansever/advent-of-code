if (require.main === module) {
    main();
}

async function main() {
    const input = await fetch("https://adventofcode.com/2024/day/3/input", {
        method: 'GET',
        headers: {
            'Cookie': process.env.COOKIE
        }
        }).then(response => response.text()).then(text => {
            return text;
        });

    let status = -1;
    let command = "";
    let value_x = "";
    let value_y = "";
    let length = 0;
    let sum = 0;
    let enabled = 1;
    for (i=0; i<input.length; i++) {
        if (enabled == 0) {
            if (input[i]+input[i+1]+input[i+2]+input[i+3] == "do()") {
                enabled = 1;
            }
            continue;
        }
        if (status == -1) {
            status = 0;
            command = "";
            value_x = "";
            value_y = "";
            length = 0;
        }
        if (status == 0 && input[i]+input[i+1]+input[i+2]+input[i+3]+input[i+4]+input[i+5]+input[i+6] == "don't()") {
            enabled = 0;
            continue;
        }
        if (status == 0 && input[i] == "m") {
            status = 1;
            command += input[i];
            continue;
        }
        else if (status == 1 && input[i] == "u") {
            status = 2;
            command += input[i];
            continue;
        }
        else if (status == 2 && input[i] == "l") {
            status = 3;
            command += input[i];
            continue;
        }
        else if (status == 3 && input[i] == "(") {
            status = 4;
            continue;
        }
        else if (status == 4 && Number.isInteger(parseInt(input[i]))) {
            if (length < 3) {
                value_x += input[i];
                length++;
            }
            else {
                status = -1;
            }
            continue;
        }
        else if (status == 4 && input[i] == "," && length > 0) {
            status = 5;
            length = 0;
            continue;
        }
        else if (status == 5 && Number.isInteger(parseInt(input[i]))) {
            if (length < 3) {
                value_y += input[i];
                length++;
            }
            else {
                status = -1;
            }
            continue;
        }
        else if (status == 5 && input[i] == ")" && length > 0) {
            sum += parseInt(value_x) * parseInt(value_y);
            status = -1;
            continue;
        }
        else {
            status = -1;
            continue;
        }
    }   
    console.log(sum);
}