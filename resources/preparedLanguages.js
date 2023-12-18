const languageData = [43, 80, 52, 50, 54, 73, 59, 61, 65, 79, 9, 28, 32, 12, 60, 74, 87, 36, 77, 83, 88, 19, 3, 4, 51, 13, 6, 7, 31, 40, 41, 70, 67, 75, 20, 34, 55, 14, 15, 17, 18, 22, 25, 26, 27, 33, 38, 39, 44, 45, 46, 47, 56, 57, 62, 68];

const languageOrder = [];

for (let i = 0; i < languageData.length; i++) {
	languageOrder[languageData[i]] = i;
}

const preparedLanguages = ["GNU C11", "Clang++20 Diagnostics", "Clang++17 Diagnostics", "GNU C++14", "GNU C++17", "GNU C++20 (64)", "MS C++ 2017", "GNU C++17 (64)", "C# 8", "C# 10", "Mono C#", "D", "Go", "Haskell", "Java 11", "Java 17", "Java 21", "Java 8", "Kotlin 1.6", "Kotlin 1.7", "Kotlin 1.9", "OCaml", "Delphi", "FPC", "PascalABC.NET", "Perl", "PHP", "Python 2", "Python 3", "PyPy 2", "PyPy 3", "PyPy 3-64", "Ruby 3", "Rust 2021", "Scala", "JavaScript", "Node.js"];
