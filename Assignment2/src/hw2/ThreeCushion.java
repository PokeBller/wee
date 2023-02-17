package hw2;

import api.PlayerPosition;
import api.BallType;
import static api.PlayerPosition.*;
import static api.BallType.*;

/**
 * Class that models the game of three-cushion billiards.
 * 
 * @author YOUR_NAME_GOES_HERE!!!
 */
public class ThreeCushion {
	
	public ThreeCushion(PlayerPosition lagWinner, int pointsToWin) {
		
	}
	
	public void lagWinnerChooses​(boolean selfBreak, BallType cueBall) {
		
	}
	
	public void cueStickStrike​(BallType ball) {
		
	}
	
	public void cueBallStrike​(BallType ball) {
		
	}
	
	public void cueBallImpactCushion() {
		
	}
	
	public void endShot() {
		
	}
	
	public void foul() {
		
	}
	
	public int getPlayerAScore() {
		
		return 0;
	}
	
	public int getPlayerBScore() {
		
		return 0;
	}
	
	public int getInning() {
		
		return 1;
	}
	
	public BallType getCueBall() {
		
		return WHITE;
	}
	
	public PlayerPosition getInningPlayer() {
		
		return PLAYER_A;
	}
	
	public boolean isBreakShot() {
		
		return false;
	}
	
	public boolean isBankShot() {
		
		return false;
	}
	
	public boolean isShotStarted() {
		
		return false;
	}
	
	public boolean isInningStarted() {
		
		return false;
	}
	
	public boolean isGameOver() {
		
		return false;
	}
	
	public java.lang.String String(){
		
		return "Hello";
	}
	// TODO: EVERTHING ELSE GOES HERE
	// Note that this code will not compile until you have put in stubs for all
	// the required methods.

	// The method below is provided for you and you should not modify it.
	// The compile errors will go away after you have written stubs for the
	// rest of the API methods.

	/**
	 * Returns a one-line string representation of the current game state. The
	 * format is:
	 * <p>
	 * <tt>Player A*: X Player B: Y, Inning: Z</tt>
	 * <p>
	 * The asterisks next to the player's name indicates which player is at the
	 * table this inning. The number after the player's name is their score. Z is
	 * the inning number. Other messages will appear at the end of the string.
	 * 
	 * @return one-line string representation of the game state
	 */
	public String toString() {
		String fmt = "Player A%s: %d, Player B%s: %d, Inning: %d %s%s";
		String playerATurn = "";
		String playerBTurn = "";
		String inningStatus = "";
		String gameStatus = "";
		if (getInningPlayer() == PLAYER_A) {
			playerATurn = "*";
		} else if (getInningPlayer() == PLAYER_B) {
			playerBTurn = "*";
		}
		if (isInningStarted()) {
			inningStatus = "started";
		} else {
			inningStatus = "not started";
		}
		if (isGameOver()) {
			gameStatus = ", game result final";
		}
		return String.format(fmt, playerATurn, getPlayerAScore(), playerBTurn, getPlayerBScore(), getInning(),
				inningStatus, gameStatus);
	}
}
