import player from '../player';

describe('player test units', () => {
    const computer = player('computer');
    const humanPlayer = player('real');

    test('should check the player type', () => {
        expect(computer.type).toMatch('computer');
    });

    test('should check if the player has its own gameboard', () => {
        expect(humanPlayer.playerGameboard).toBeTruthy()
    });

    test('should check if boards are different', () => {
        expect(
            computer.playerGameboard !== humanPlayer.playerGameboard,
        ).toBeTruthy();
    });
});
