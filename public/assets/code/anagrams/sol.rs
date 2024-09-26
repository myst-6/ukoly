use std::io::{self, Write};

fn are_anagrams(word1: &str, word2: &str) -> bool {
    let mut chars1: Vec<char> = word1.chars().collect();
    let mut chars2: Vec<char> = word2.chars().collect();
    chars1.sort_unstable();
    chars2.sort_unstable();
    chars1 == chars2
}

fn main() {
    // Input from the user
    let mut word1 = String::new();
    let mut word2 = String::new();
    
    io::stdout().flush().unwrap(); // Ensure the prompt is displayed before input
    io::stdin().read_line(&mut word1).expect("Failed to read line");
    
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut word2).expect("Failed to read line");

    // Remove newline characters from the inputs
    let word1 = word1.trim();
    let word2 = word2.trim();
    
    // Check if they are anagrams
    if are_anagrams(word1, word2) {
        println!("Anagrams");
    } else {
        println!("Not anagrams");
    }
}
