if (require.main === module) {
    main();
}

function main() {
    var input = [
                "MMMSXXMASM",
                "MSAMXMSMSA",
                "AMXSXMAAMM",
                "MSAMASMSMX",
                "XMASAMXAMM",
                "XXAMMXXAMA",
                "SMSMSASXSS",
                "SAXAMASAAA",
                "MAMMMXMMMM",
                "MXMXAXMASX"
            ];
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            console.log(input[i][j], i, j);
            i,j i,j+1 i,j+2 i,j+3
            //look horizontal
            i,j i-1,j i-2,j i-3,j
            //look vertical
            i,j i-1,j+1 i-2,j+2 i-3,j+3
            //look diagonal
            //make everything backwards too
        }
    }
}