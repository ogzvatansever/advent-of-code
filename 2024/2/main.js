if (require.main === module) {
    main();
}

async function main() {
    const test_input = ["7 6 4 2 1",
                        "1 2 7 8 9",
                        "9 7 6 2 1",
                        "1 3 2 4 5",
                        "8 6 4 4 1",
                        "1 3 6 7 9",
    ];

    const input = await fetch("https://adventofcode.com/2024/day/2/input", {
        method: 'GET',
        headers: {
            'Cookie': process.env.COOKIE
        }
        }).then(response => response.text()).then(text => {
            return text.trim().split("\n");
        });

    let safe_num = 0;
    
    input.forEach(row => {
        row = row.split(" ").map(x => parseInt(x));
        let errors = [];
        for (let i=0; i<row.length - 1; i++) {
            let differ = row[i] - row[i+1];
            if (differ < 0 && differ > -4) {
                errors.indexOf("-") === -1 ? errors.push("-") : null;
            }
            else if (differ > 0 && differ < 4) {
                errors.indexOf("+") === -1 ? errors.push("+") : null;
            }
            else {
                errors.push("!");
            }
        };
        if (errors.length === 1) {
            safe_num++;
        } else {
            let new_rows = [];
            for (i=0; i<row.length; i++) {
                new_rows.push(row.toSpliced(i,1));
            };
            let loopBreak = false;
            new_rows.forEach(row => {
                if (loopBreak) return;
                let new_errors = [];
                for (let i=0; i<row.length - 1; i++) {
                    let differ = row[i] - row[i+1];
                    if (differ < 0 && differ > -4) {
                        new_errors.indexOf("-") === -1 ? new_errors.push("-") : null;
                    }
                    else if (differ > 0 && differ < 4) {
                        new_errors.indexOf("+") === -1 ? new_errors.push("+") : null;
                    }
                    else {
                        return;
                    }
                }
                if (new_errors.length === 1) {
                    safe_num++;
                    loopBreak = true;
                } 
            });
        }
    });
    console.log(safe_num);
};
