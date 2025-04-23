export function SecondsToTime(seconds: number): string {
    const min = (seconds / 3600) % 60
    
    return `${seconds}s`
}