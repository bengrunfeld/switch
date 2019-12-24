# Switch

This tool takes the the first line of a CSV until the first instance of a newline character, and enforces modification rules on the content found therein.

## Usage

Clone the directory onto your computer:

`git clone git@github.com:bengrunfeld/switch.git`

Navigate into the directory:

`cd switch`

Execute the program on the target CSV file:

`node index.js budget_hospital_family.csv`

The program will output a new file with updated field names to the current directory, although its filename will now be `budget_hospital_family_new.csv`. The original file (`budget_hospital_family.csv`) will still exist though.