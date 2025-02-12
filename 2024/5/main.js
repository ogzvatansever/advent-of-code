if (require.main === module) {
    main();
}

function inputtest() {
    const text = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;
    return [text.split("\n").filter((line) => line.length > 0 && line.length < 6), text.split("\n").filter((line) => line.length > 5)];
}

async function main() {
    const input1 = await fetch("https://adventofcode.com/2024/day/5/input", {
        method: 'GET',
        headers: {
            'Cookie': process.env.COOKIE
        }
        }).then(response => response.text()).then(text => {
            return [text.split("\n").filter((line) => line.length > 0 && line.length < 6), text.split("\n").filter((line) => line.length > 5)]
        });
    const input = inputtest();
    let rules = input[0].map((x) => x);
    let updates = input[1].map((x) => x);
    let output = input[1].map((x) => x);
    let errors = [];
    for (let i = 0; i < updates.length; i++) {
        for (let j = 0; j < rules.length; j++) {
            let [rule, number] = rules[j].split("|");
            if (updates[i].indexOf(number) !== -1 && updates[i].indexOf(rule) !== -1) {
                if (updates[i].indexOf(number) < updates[i].indexOf(rule)) {
                    errors.push(updates[i]);
                    output.splice(output.indexOf(updates[i]), 1);
                    break;
                }
            }
        }
    }
    console.log(errors);
    errors = errors.map((error) => {
        let error_array = error.split(",");
        for (let i = 0; i < rules.length; i++) {
            // move the number according to the rule
        }
    });
    console.log(errors);
    output = output.map((x) => x.split(","));
    let output_int = 0;
    for (let i = 0; i < output.length; i++) {
        output_int += parseInt(output[i][Math.floor(output[i].length/2)]);
    }
    console.log(output_int);
}