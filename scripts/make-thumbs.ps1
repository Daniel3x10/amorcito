Add-Type -AssemblyName System.Drawing

Copy-Item -Path 'D:\CUMPLEAÑOS\*' -Destination 'd:\PROYECTOS\amorcito\public\fotos\' -Force
New-Item -ItemType Directory -Force -Path 'd:\PROYECTOS\amorcito\public\fotos\thumbs' | Out-Null

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]80)

$files = Get-ChildItem -Path 'd:\PROYECTOS\amorcito\public\fotos' -File
foreach ($file in $files) {
    if ($file.Extension -match '\.jpe?g|\.png') {
        $destPath = Join-Path 'd:\PROYECTOS\amorcito\public\fotos\thumbs' $file.Name
        if (-not (Test-Path $destPath)) {
            try {
                $img = [System.Drawing.Image]::FromFile($file.FullName)
                $maxDim = 640.0
                $scale = [Math]::Min($maxDim / $img.Width, $maxDim / $img.Height)
                if ($scale -gt 1.0) { $scale = 1.0 }
                $newW = [int]($img.Width * $scale)
                $newH = [int]($img.Height * $scale)
                $thumb = New-Object System.Drawing.Bitmap($newW, $newH)
                $g = [System.Drawing.Graphics]::FromImage($thumb)
                $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $g.DrawImage($img, 0, 0, $newW, $newH)
                $g.Dispose()
                $img.Dispose()
                $thumb.Save($destPath, $codec, $encoderParams)
                $thumb.Dispose()
            } catch {
                Write-Host "Error en $($file.Name): $($_.Exception.Message)"
            }
        }
    }
}
$count = (Get-ChildItem -Path 'd:\PROYECTOS\amorcito\public\fotos\thumbs' | Measure-Object).Count
Write-Host "Thumbnails generados exitosamente: $count"
