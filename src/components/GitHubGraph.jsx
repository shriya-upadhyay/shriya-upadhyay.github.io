import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './GitHubGraph.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const CELL_STEP = 13; // 11px cell + 2px gap

function GitHubGraph() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tooltip, setTooltip] = useState(null);

    useEffect(() => {
        fetch('/github.json')
            .then(r => { if (!r.ok) throw new Error(); return r.json(); })
            .then(d => { if (d.weeks?.length) setData(d); })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    if (loading || !data) return null;

    // Build month label positions
    const monthLabels = [];
    data.weeks.forEach((week, wi) => {
        if (!week.days[0]) return;
        const d = new Date(week.days[0].date + 'T00:00:00');
        if (d.getDate() <= 7) {
            const name = MONTHS[d.getMonth()];
            const prev = monthLabels[monthLabels.length - 1];
            if (!prev || prev.name !== name) {
                monthLabels.push({ name, col: wi });
            }
        }
    });

    const fmtDate = str => new Date(str + 'T00:00:00').toLocaleDateString('en-US', {
        weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
    });

    return (
        <div className="gh-graph">
            <div className="gh-header">
                <span className="gh-title">GitHub Activity</span>
                <span className="gh-count">
                    {data.totalContributions.toLocaleString()} contributions in the last year
                </span>
            </div>

            <div className="gh-body">
                {/* Day-of-week labels */}
                <div className="gh-days">
                    {DAY_LABELS.map((d, i) => (
                        <span key={i} className="gh-day-label">{d}</span>
                    ))}
                </div>

                <div className="gh-right">
                    {/* Month labels */}
                    <div className="gh-months">
                        {monthLabels.map((m, i) => (
                            <span
                                key={i}
                                className="gh-month-label"
                                style={{ left: m.col * CELL_STEP }}
                            >
                                {m.name}
                            </span>
                        ))}
                    </div>

                    {/* Contribution grid */}
                    <div
                        className="gh-grid"
                        onMouseLeave={() => setTooltip(null)}
                    >
                        {data.weeks.map((week, wi) =>
                            week.days.map((day, di) => (
                                <div
                                    key={`${wi}-${di}`}
                                    className={`gh-cell lv${day.level}`}
                                    onMouseEnter={e =>
                                        setTooltip({ day, x: e.clientX, y: e.clientY })
                                    }
                                    onMouseMove={e =>
                                        setTooltip(t => t ? { ...t, x: e.clientX, y: e.clientY } : t)
                                    }
                                />
                            ))
                        )}
                    </div>

                </div>
            </div>

            {/* Legend — outside scroll container so always fully visible */}
            <div className="gh-legend">
                <span className="gh-legend-label">Less</span>
                {[0, 1, 2, 3, 4].map(l => (
                    <div key={l} className={`gh-cell lv${l}`} />
                ))}
                <span className="gh-legend-label">More</span>
            </div>

            {/* Tooltip rendered at body level to avoid overflow clipping */}
            {tooltip && createPortal(
                <div
                    className="gh-tooltip"
                    style={{ left: tooltip.x + 14, top: tooltip.y - 52 }}
                >
                    <strong>
                        {tooltip.day.count === 0
                            ? 'No contributions'
                            : `${tooltip.day.count} contribution${tooltip.day.count !== 1 ? 's' : ''}`}
                    </strong>
                    <span>{fmtDate(tooltip.day.date)}</span>
                </div>,
                document.body
            )}
        </div>
    );
}

export default GitHubGraph;
