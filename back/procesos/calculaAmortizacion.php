<?php

function amortizacion ($montoPrestamo, $plazo) {
    $q1 = 15;
    $q2 = 30;
    $mes = date('m') + 1;
    $anio = date('Y');
    $prestamo = $montoPrestamo / $plazo;
    $interes = ($montoPrestamo / $plazo) * 0.11;
    $abono = $prestamo + $interes;
    $contDia = 1;
    $cont = 1;

    $arr = null;
    $arrAmortizacion = array();

    for ($i=0; $i < $plazo ; $i++) {
        if ($contDia === 1) {
            $date = new DateTime( "$anio-$mes-$q1" );

            $contDia = 2;
        } else {
            $date = new DateTime( "$anio-$mes-$q2" );

            $contDia = 1;

            if ( ($mes + 1) === 13 ) {
                $mes = 1;
                $anio = $anio + 1;
            } else {
                $mes = $mes + 1;
            }
        }

        $arr[] = array(
            "no-pago" => $cont,
            "fecha" => $date->format('Y-m-d'),
            "prestamo" => $prestamo,
            "interes" => $interes,
            "abono" => $abono
        );

        $cont++;
    }

    $arrAmortizacion = $arr;
    unset($arr);

    return $arrAmortizacion;
}
