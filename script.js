  document.addEventListener('DOMContentLoaded', function() {
            const recommendBtn = document.getElementById('recommend-btn');
            const movieSelect = document.getElementById('movie-select');
            const resultBox = document.getElementById('result-box');
            const result = document.getElementById('result');
            
            // Show result box with animation
            resultBox.classList.add('visible');
            
            recommendBtn.addEventListener('click', function() {
                if (!movieSelect.value) {
                    showMessage('Please select a movie first', 'error');
                    return;
                }
                
                // Show loading state
                showMessage('<div class="loading"><div class="spinner"></div>Finding recommendations...</div>', 'loading');
                
                // Simulate API call
                setTimeout(() => {
                    const movies = {
                        'inception': 'The Prestige, Interstellar, Tenet, Shutter Island',
                        'pulp-fiction': 'Reservoir Dogs, Kill Bill, Django Unchained, Once Upon a Time in Hollywood',
                        'godfather': 'Goodfellas, Casino, Scarface, The Departed',
                        'dark-knight': 'V for Vendetta, Watchmen, Logan, Batman Begins',
                        'matrix': 'Blade Runner 2049, The Terminator, Minority Report, Equilibrium'
                    };
                    
                    const recommendations = movies[movieSelect.value];
                    showMessage(`<div class="success"><i class="fas fa-check-circle icon"></i> Based on your selection, we recommend: ${recommendations}</div>`, 'success');
                }, 1500);
            });
            
            function showMessage(message, type) {
                result.innerHTML = message;
                resultBox.className = '';
                resultBox.classList.add('visible', type);
            }
        });
    </script>
