export enum PlayerTypesEnum {
    BASE,
    DETERMINISTIC
}
export enum PlayerPositionsEnum {
    NO_POS= -1,
    PILE= 0,
    HAND_1,
    HAND_2,
    HAND_3,
    HAND_4,
    HAND_5,
    STACK_1,
    STACK_2,
    STACK_3,
    STACK_4
}
export enum GamePositionsEnum {
    BASE= 10,
    STACK_1= 0,
    STACK_2,
    STACK_3,
    STACK_4,
    DECK= 20,
    RECYCLE_PILE
}
export enum TabsEnum {
    DEFAULT= 0,
    DASHBOARD= 0,
    PLAY_AREA= 1
}
export enum SuitsEnum {
    SPADES= 0,
    HEARTS= 13,
    CLUBS= 26,
    DIAMONDS= 39
}
export enum CardsEnum {
    NO_CARD= 0,
    ACE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
    DECK= 52,
    JOKER= 53
}
export enum TurnEnum {
    PLAYER= 0,
    DEALER,
    RECYCLE
}
