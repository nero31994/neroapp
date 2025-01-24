/* Search Bar Styling */
#searchBar {
    font-size: 1rem;
    padding: 10px 15px;
    color: #cbd5e1;
    background: #1e293b;
    border: 2px solid transparent;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
}

#searchBar:focus {
    border: 2px solid #06b6d4;
    box-shadow: 0 4px 10px rgba(6, 182, 212, 0.5);
    background: #0f172a;
    color: #e2e8f0;
}

/* Search Bar Placeholder Color */
#searchBar::placeholder {
    color: #6b7280;
    opacity: 0.8;
}

/* Center Search Bar */
body > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    #searchBar {
        font-size: 0.9rem;
    }
}
