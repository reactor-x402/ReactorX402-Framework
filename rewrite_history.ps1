Write-Host "🚀 Starting PowerShell commit history randomization..." -ForegroundColor Cyan

# Define time window (last 30 days)
$startDate = (Get-Date).AddDays(-30)
$endDate = Get-Date

# Get all commit hashes
$commits = git rev-list --all
$total = $commits.Count
$i = 0

foreach ($commit in $commits) {
    $i++

    # Random day offset between 0–30 days ago
    $randomDays = Get-Random -Minimum 0 -Maximum 30
    $randomHours = Get-Random -Minimum 0 -Maximum 23
    $randomMinutes = Get-Random -Minimum 0 -Maximum 59

    # Calculate random timestamp
    $newDate = $startDate.AddDays($randomDays).AddHours($randomHours).AddMinutes($randomMinutes)
    $dateString = $newDate.ToString("ddd MMM dd HH:mm:ss yyyy +0530")

    # Rewrite commit dates
    git filter-branch -f --env-filter "export GIT_AUTHOR_DATE='$dateString'; export GIT_COMMITTER_DATE='$dateString'" $commit~1..$commit | Out-Null

    Write-Host "[$i/$total] Updated commit $commit → $dateString"
}

Write-Host "`n✅ All commit timestamps randomized successfully between $($startDate.ToShortDateString()) and $($endDate.ToShortDateString())!" -ForegroundColor Green
