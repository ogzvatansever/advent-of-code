if (require.main === module) {
    main();
}

async function main() {
    const input = await fetch("https://adventofcode.com/2024/day/4/input", {
        method: 'GET',
        headers: {
            'Cookie': process.env.COOKIE
        }
        }).then(response => response.text()).then(text => {
            return text.split("\n");
        });
    var count = 0;
    var count1 = 0;
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            var needle = ["XMAS", "SAMX"];
            try {
                if (needle.includes(input[i][j]+input[i][j+1]+input[i][j+2]+input[i][j+3])) {
                    count++;
                }
                if (needle.includes(input[i][j]+input[i-1][j]+input[i-2][j]+input[i-3][j])) {
                    count++;
                }
                if (needle.includes(input[i][j]+input[i-1][j+1]+input[i-2][j+2]+input[i-3][j+3])) {
                    count++;
                }
                if (needle.includes(input[i][j]+input[i-1][j-1]+input[i-2][j-2]+input[i-3][j-3])) {
                    count++;
                }
            } catch {}
            try {
                if ( ( input[i-1][j-1]+input[i][j]+input[i+1][j+1] == "MAS" || input[i-1][j-1]+input[i][j]+input[i+1][j+1] == "SAM" ) && ( input[i-1][j+1]+input[i][j]+input[i+1][j-1] == "SAM" || input[i-1][j+1]+input[i][j]+input[i+1][j-1] == "MAS" ) ) {
                    count1++;
                }
            } catch {}
        }
    }
    console.log("Count: ", count);
    console.log("Count 2: ", count1);
}