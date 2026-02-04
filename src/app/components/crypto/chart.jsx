'use client'
import React from 'react'
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Chart = dynamic(()=>import('react-apexcharts'),{ssr:false})

export default function Charts() {
   let  options = {
        series: [{
            data: [20, 45, 40, 64, 35, 25, 35]
        }],
        chart: {
            type: 'area',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#52cc99'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
   let options2 = {
        series: [{
            data: [10, 25, 30, 54, 45, 39, 15]
        }],
        chart: {
            type: 'area',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#ff6647'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    let options3 = {
        series: [{
            data: [15, 20, 10, 45, 20, 10, 5]
        }],
        chart: {
            type: 'area',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#52cc99'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
    let options4 = {
        series: [{
            data: [3, 5, 7, 11, 8, 5, 7]
        }],
        chart: {
            type: 'area',
            height: 90,
            width: '100%',
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        colors: ['#ff6647'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100]
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };
  return (
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="card border-0 p-4 rounded shadow position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Image src="/images/crypto/bitcoin.png" width={36} height={36} className="avatar avatar-coin rounded-pill p-1 bg-success" alt=""/>
                        <span className="text-muted">BTC</span>
                    </div>

                    <h6>Bitcoin</h6>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <small className="text-success">+15.55%</small>
                        <small className="text-success">+$ 155</small>
                        <small>$ 41245</small>
                    </div>

                    <div className="crypto-chart">
                        <div>
                            <div id="chart-1">
                                <Chart options={options} series={options.series} type="area" height={90} width='100%'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="card border-0 p-4 rounded shadow position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Image src="/images/crypto/ethereum.png" width={36} height={36} className="avatar avatar-coin rounded-pill p-1 bg-danger" alt=""/>
                        <span className="text-muted">ETS</span>
                    </div>

                    <h6>Ethereum</h6>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <small className="text-danger">-25.01%</small>
                        <small className="text-danger">-$ 524</small>
                        <small>$ 1458</small>
                    </div>

                    <div className="crypto-chart">
                        <div>
                            <div id="chart-2">
                                <Chart options={options2} series={options2.series} type="area" height={90} width='100%'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="card border-0 p-4 rounded shadow position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Image src="/images/crypto/monero.png" width={36} height={36} className="avatar avatar-coin rounded-pill p-1 bg-success" alt=""/>
                        <span className="text-muted">XMR</span>
                    </div>

                    <h6>Monero</h6>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <small className="text-success">+3.08%</small>
                        <small className="text-success">+$ 58</small>
                        <small>$ 448</small>
                    </div>

                    <div className="crypto-chart">
                        <div>
                            <div id="chart-3">
                                <Chart options={options3} series={options3.series} type="area" height={90} width='100%'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="card border-0 p-4 rounded shadow position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <Image src="/images/crypto/litecoin.png" width={36} height={36} className="avatar avatar-coin rounded-pill p-1 bg-danger" alt=""/>
                        <span className="text-muted">LTC</span>
                    </div>

                    <h6>Litecoin</h6>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <small className="text-danger">-5.05%</small>
                        <small className="text-danger">-$ 48</small>
                        <small>$ 478</small>
                    </div>

                    <div className="crypto-chart">
                        <div>
                            <div id="chart-4">
                                <Chart options={options4} series={options4.series} type="area" height={90} width='100%'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
