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
	
	private int pointsToWin;
	private PlayerPosition lagWinner;
	private int inning;
	private int playerAScore;
    private int playerBScore;
    private boolean isPlayerATurn;
    private boolean BreakShot;
    private BallType cueBall;
    private PlayerPosition inningPlayer;
    private boolean GameOver;
    private boolean ShotStarted;
    private boolean ShotValid;
    private boolean inningStarted;
    private boolean isPlayerACueBallHit;
    private boolean isPlayerBCueBallHit;
    
	public ThreeCushion(PlayerPosition lagWinner, int pointsToWin) {
		this.lagWinner = lagWinner;
		this.pointsToWin = pointsToWin;
		playerAScore = 0;
        playerBScore = 0;
        isPlayerATurn = true;
        BreakShot = false;
        cueBall = BallType.WHITE;
		inning = 1;
		
	}
	
	public void lagWinnerChooses​(boolean selfBreak, BallType cueBall) {
		BreakShot = selfBreak;
        inningPlayer = selfBreak ? PlayerPosition.PLAYER_A : PlayerPosition.PLAYER_B;
        this.cueBall = cueBall;
	 }
	
	public void cueStickStrike​(BallType ball) {
		  if (GameOver) {
		        return;
		    }

		    if (!ShotStarted) {
		        inningStarted = true;
		        ShotStarted = true;
		        if (ball == BallType.WHITE) {
		            isPlayerACueBallHit = true;
		        } else {
		            foul();
		        }
		    } else {
		        if (isPlayerACueBallHit && ball != BallType.WHITE) {
		            ShotValid = true;
		        } else {
		            foul();
	        }
		    }

		}
	
		public void cueBallStrike​(BallType ball) {
			if (ball != BallType.WHITE) {
		        foul();
		        return;
		    }

		    if (!ShotStarted) {
		        isPlayerACueBallHit = true;
		    } else {
		        if (isPlayerACueBallHit) {
		            ShotValid = true;
		        } else {
		            foul();
		        }
		    }
		}
		
		public void cueBallImpactCushion() {
			  if (!ShotStarted) {
			        ShotValid = false;
			        foul();
			        return;
			    }
			    // Update the value of inningPlayer
			    if (isPlayerATurn) {
			        inningPlayer = PlayerPosition.PLAYER_B;
			    } else {
			        inningPlayer = PlayerPosition.PLAYER_A;
			}
		}
	
		public void endShot() {
			ShotStarted = false;
		    BreakShot = false;

		    if (ShotValid) {
		        if (isPlayerATurn) {
		            playerAScore++;
		        } else {
		            playerBScore++;
		        }
		    } else {
		        if (isPlayerATurn) {
		            cueBall = BallType.YELLOW;
		        } else {
		            cueBall = BallType.WHITE;
		        }
		        isPlayerATurn = !isPlayerATurn;
		        inning++;
		    }

		    isPlayerACueBallHit = false;
		    isPlayerBCueBallHit = false;

		    // Update the value of inningPlayer
		    if (isPlayerATurn) {
		        inningPlayer = PlayerPosition.PLAYER_A;
		    } else {
		        inningPlayer = PlayerPosition.PLAYER_B;
		    }
		    
		    // Update the value of isPlayerATurn
		    isPlayerATurn = !isPlayerATurn;
			    } 

	
	public void foul() {
		if (isPlayerATurn) {
	        isPlayerATurn = false;
	        cueBall = BallType.YELLOW;
	    } else {
	        isPlayerATurn = true;
	        cueBall = BallType.WHITE;
	    }
	    inning++;
	    ShotStarted = false;
	    inningStarted = false;
	    ShotValid = false;

	    // Update the value of inningPlayer
	    if (isPlayerATurn) {
	        inningPlayer = PlayerPosition.PLAYER_A;
	    } else {
	        inningPlayer = PlayerPosition.PLAYER_B;
	    }
	}
	
	public int getPlayerAScore() {
		
		return playerAScore;
	}
	
	public int getPlayerBScore() {
		
		return playerBScore;
	}
	
	public int getInning() {
		
		return inning;
	}
	
	public BallType getCueBall() {
		
		return cueBall;
	}
	
	public PlayerPosition getInningPlayer() {
		
		return inningPlayer;
	}
	
	public boolean isBreakShot() {
		
		return BreakShot;
	}
	
	public boolean isBankShot() {
		
		return false;
	}
	
	public boolean isShotStarted() {
		
		return ShotStarted;
	}
	
	public boolean isInningStarted() {
		
		return inningStarted;
	}
	
	public boolean isGameOver() {
		
		return GameOver;
	}
	
	public String toString1(){
	    String turn = isPlayerATurn ? "A*" : "B";
	    return "Player " + turn + ": " + playerAScore + " Player B: " + playerBScore + ", Inning: " + inning;
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