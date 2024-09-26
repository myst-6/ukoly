import { Test } from './base';

export const TestPlayfairCipher: Test[] = [
    {
        input: "DOG\nBONE\nE\nKENNEL\nE\nCAT\nD\nNVSC\nD\nYJIFOS\nQ",
        output: "D O G A B Z Y X W V\nC E F H I U T S R P\nJ K L M N M L K J I\nP R S T U H G F D C\nV W X Y Z A E N O B\nWLZKKT\nVUAF\nBIRD\nMOUSE",
        points: 8
    },
    {
        input: "APRICOT\nORANGE\nE\nLEMON\nE\nCUCUMBER\nD\nXSXCXC\nD\nMFWERC\nQ",
        output: "A P R I C Z Y X W V\nO T B D E U T S P M\nF G H J K L K J I H\nL M N S U F D C B E\nV W X Y Z G N A R O\nMFWERC\nEZEZNEZP\nBANANA\nLEMON",
        points: 8
    },
    {
        input: "ABRACADABRA\nXYZZY\nE\nCORNUCOPIA\nE\nLIBRARY\nD\nESFMAW\nD\nSDMHYVZH\nQ",
        output: "A B R C D W V U T S\nE F G H I R P O N M\nJ K L M N L K J I H\nO P S T U G F E D C\nV W X Y Z B A Z Y X\nHUGTOGEFZP\nMHFWEWZB\nAMENDS\nPELICAN",
        points: 8
    },
    {
        input: "ABCDEFGHIJKLMNOPRSTUVWXYZ\nZYXWVUTSRPONMLKJIHGFEDCBA\nE\nPLAYFAIR\nD\nHDFSUB\nQ",
        output: "A B C D E A B C D E\nF G H I J F G H I J\nK L M N O K L M N O\nP R S T U P R S T U\nV W X Y Z V W X Y Z\nKRVDAFTG\nCIPHER",
        points: 6
    }
];
