import time
import os

class FixedGameOfLife:
    def __init__(self, rows, cols, initial_live_cells):
        self.rows = rows
        self.cols = cols
        # Initialize an empty grid filled with 0s (dead)
        self.grid = [[0 for _ in range(cols)] for _ in range(rows)]
        
        # Populate the grid with the initial live cells (1s)
        for r, c in initial_live_cells:
            if 0 <= r < self.rows and 0 <= c < self.cols:
                self.grid[r][c] = 1

    def display(self):
        # Clears the console for a smooth animation effect
        os.system('cls' if os.name == 'nt' else 'clear')
        for row in self.grid:
            # ■ represents alive, . represents dead
            print(' '.join(['■' if cell else '.' for cell in row]))
        print("-" * (self.cols * 2))

    def count_live_neighbors(self, r, c):
        count = 0
        # Check all 8 surrounding cells
        for i in [-1, 0, 1]:
            for j in [-1, 0, 1]:
                if i == 0 and j == 0:
                    continue # Skip the cell itself
                
                nr, nc = r + i, c + j
                # Check boundaries
                if 0 <= nr < self.rows and 0 <= nc < self.cols:
                    count += self.grid[nr][nc]
        return count

    def next_generation(self):
        # Create a new blank grid to store the next state
        new_grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]
        
        for r in range(self.rows):
            for c in range(self.cols):
                live_neighbors = self.count_live_neighbors(r, c)
                
                if self.grid[r][c] == 1:
                    # Rule 1, 2, 3: Underpopulation, Survival, Overpopulation
                    if live_neighbors in [2, 3]:
                        new_grid[r][c] = 1 # Lives on
                    else:
                        new_grid[r][c] = 0 # Dies
                else:
                    # Rule 4: Reproduction
                    if live_neighbors == 3:
                        new_grid[r][c] = 1 
                        
        self.grid = new_grid # Update the grid

    def play(self, generations, delay=0.4):
        for i in range(generations):
            self.display()
            print(f"Generation: {i + 1}")
            self.next_generation()
            time.sleep(delay)

# --- Test States ---
# 1. Block (Still Life - doesn't change)
block_state = [(1, 1), (1, 2), (2, 1), (2, 2)]

# 2. Blinker (Oscillator - flips back and forth)
blinker_state = [(2, 1), (2, 2), (2, 3)]

# 3. Glider (Spaceship - moves diagonally until it hits the fixed border)
glider_state = [(0, 1), (1, 2), (2, 0), (2, 1), (2, 2)]

# Run a simulation
print("Starting the Glider simulation...")
time.sleep(1)
game = FixedGameOfLife(rows=10, cols=10, initial_live_cells=glider_state)
game.play(generations=15)