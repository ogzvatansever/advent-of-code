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
            return text.trim().split("\n");
        });
    console.log(input);
}